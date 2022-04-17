import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
// import { useSearchParams } from "react-router-dom";
import TokenService from "../services/token.service";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import axios from "axios";
import { getERC20TokenBalance } from "../ethers_helpers/GetTokenBalance";
// import { NIIFI } from "./ethers_helpers/TokenDetails";
// import "./WalletCard.css";

const Wallet = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [ERC20Balance, setERC20Balance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);
  const [name, setName] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);


  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const loginHandler = async () => {
      console.log("logging in")
    if (window.ethereum && window.ethereum.isMetaMask) {
        console.log("logging in2")

        var url =
          "http://localhost:8000/users/auth/connect?wallet_address=" +
          defaultAccount;
      axios.get(url).then((res) => {
        console.log("MetaMask Here!");
        const signer = provider.getSigner();
        signer.signMessage(res.data).then((signature) => {
          axios
            .post("http://localhost:8000/users/auth/login", {
              wallet_address: defaultAccount,
              signature: signature,
            })
            .then((res) => {
              console.log(res.data);
              setName(res.data.first_name + " " + res.data.last_name);
              TokenService.setUser(res.data);
            })
            .catch((err) => console.log(err));
        });
      });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

//   const getAuthenticatedData = () => {
//     api.get("/users/me").then((res) => {
//       console.log(res.data);
//       setAuthenticated(true);
//     });
//   };

  useEffect(() => {
    loginHandler()
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
      const options = {
        address: defaultAccount,
        provider: provider,
      };
      getERC20TokenBalance(options)
        .then((res) => {
          setERC20Balance(res);
        })
        .catch((err) => {
          console.log("ERC20 Balance error: ", err);
        });
    }
  }, [defaultAccount]);

  return (
    // <div className="walletCard">
    <Nav.Link onClick={connectWalletHandler}>Connect Wallet</Nav.Link>
    //   <button onClick={loginHandler}>login</button>
    //   <button onClick={getAuthenticatedData}>authenticate</button>
    // </div>
  );
};

export default Wallet;
