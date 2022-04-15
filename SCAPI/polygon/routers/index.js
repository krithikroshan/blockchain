const express = require("express");
const fs = require("fs");
import { ethers } from "ethers";
import Web3Modal from "web3modal";
// const  deploySmartContract  = require("../scFunctions/deploy") ;
// const {zilliqa, address, config} = require("../zil_wallet/zil") ;

const router = express.Router();

import NFTMarketplace from "../../../frontend-next/artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json";

router.use((req, res, next) => {
  next();
});

router.post("/deploy", async function (req, res, next) {
  const MyNFT = await ethers.getContractFactory("NFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
});

router.post("/mint", async function (req, res, next) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    /* create the NFT */
    const price = ethers.utils.parseUnits(req.body.price, 'ether')
    let contract = new ethers.Contract(req.body.marketplaceAddress, NFTMarketplace.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()
    let transaction = await contract.createToken("", price, { value: listingPrice })
    await transaction.wait()
  });

module.exports = router;
