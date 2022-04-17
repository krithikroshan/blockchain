import React, { useState, useEffect } from "react";
import Router from "next/router";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import Link from "next/link";
import { capitalizeFirstLetter } from "../../helper_functions/StringOperations"
import styles from "../../styles/Header.module.css";
import Wallet from "./Wallet";
import { ethers } from "ethers";
import TokenService from "../services/token.service";
import axios from "axios";
import { getERC20TokenBalance } from "../ethers_helpers/GetTokenBalance";


function Header() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [ERC20Balance, setERC20Balance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (currentUser.loggedIn) {
      var name =
        capitalizeFirstLetter(currentUser.user.user.first_name) +
        " " +
        capitalizeFirstLetter(currentUser.user.user.last_name);
      setUser(name);
    } else {
      setUser(null);
    }
  }, [currentUser]);

  useEffect(() => {
    setLoading(false);
  }, [user]);

  const logout = () => {
    dispatch(allActions.userActions.logOut());
    Router.push("/");
  };

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      console.log("hello")
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
          console.log(result[0])
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
    console.log("h1")
    if (window.ethereum && window.ethereum.isMetaMask && defaultAccount) {
        console.log("h2")
        var url =
          "http://localhost:8000/users/wallet/connect?wallet_address=" +
          defaultAccount;
      axios.get(url).then((res) => {
        console.log("MetaMask Here!");
        const signer = provider.getSigner();
        signer.signMessage(res.data).then((signature) => {
          axios
            .post("http://localhost:8000/users/wallet/login/", {
              wallet_address: defaultAccount,
              signature: signature,
            })
            .then((res) => {
              console.log(res.data);
              setUser(res.data.wallet_address);
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

  useEffect(() => {
    if (defaultAccount) {
      loginHandler()
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
    <header>
      <Navbar bg="light" variant="light">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>Access</Navbar.Brand>
          </Link>
          <Nav>
            {/* <Link href="/manage/events/create" passHref>
              <Nav.Link>
                <i className="fas fa-shopping-cart pr-1"></i> Create Event
              </Nav.Link>
            </Link> */}
            <Link href="/tickets/view" passHref>
              <Nav.Link>
                <i className="fas fa-shopping-cart pr-1"></i> My Tickets
              </Nav.Link> 
            </Link>
            {!loading && !user ? (
              // <Link href="/login" passHref>
              <Nav.Link onClick={connectWalletHandler}>Connect Wallet</Nav.Link>
            ) : user ? (
              // </Link>
              <NavDropdown title={user} id="email">
                <Link href="/account" passHref>
                  <NavDropdown.Item>Account</NavDropdown.Item>
                </Link>
                <Link href="/manage/events" passHref>
                  <NavDropdown.Item>Manage Events</NavDropdown.Item>
                </Link>
                <Link href="/manage/events/create" passHref>
                  <NavDropdown.Item>Create Event</NavDropdown.Item>
                </Link>
                <NavDropdown.Item
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
