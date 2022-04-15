
const express = require('express') ; 
const fs = require('fs');
const  mint  = require("../scFunctions/mint") ;
const retrieve = require("../scFunctions/retrieve") ;  
const {zilliqa, address, config} = require("../zil_wallet/zil") ; 


const ticketRouter = express.Router() ; 



ticketRouter.use((req, res, next)=>{
    next() ; 
}) ; 


ticketRouter.post('/mint', async function (req, res, next){

    var toAddress = req.body["toAddress"]
    var tokenURI = req.body["tokenURI"]
    var SCAddress = req.body["SCAddress"]
   
    const confirmedTxn = await mint(SCAddress, toAddress, tokenURI) ;

    if (confirmedTxn){
        res.json({'success': 1, 'error' : null, 'data': {txId : confirmedTxn}}) 
    } else {
        res.json({'success': 0, 'error' : 1, 'data': null}) 
    }
 
}) ; 

ticketRouter.post('/retrieve', async function (req, res, next){

    var tokenID = req.body["tokenID"] ; 
    var SCAddress = req.body["SCAddress"] ; 
   
    const confirmedTxn = await retrieve(SCAddress, tokenID) ;

    if (confirmedTxn){
        res.json({'success': 1, 'error' : null, 'data': {confiredTxn : confirmedTxn}}) 
    } else {
        res.json({'success': 0, 'error' : 1, 'data': null}) 
    }
 
}) ;

ticketRouter.post('/transfer', async function (req, res, next){

    var toAddress = req.body["toAddress"]
    var SCAddress = req.body["SCAddress"] ; 
    var tokenID = req.body["tokenID"] ; 
   
    const confirmedTxn = await mint(SCAddress,toAddress, tokenID) ;

    if (confirmedTxn){
        res.json({'success': 1, 'error' : null, 'data': {confiredTxn : confirmedTxn}}) 
    } else {
        res.json({'success': 0, 'error' : 1, 'data': null}) 
    }
 
}) ; 

module.exports = ticketRouter; 

