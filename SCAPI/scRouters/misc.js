const express = require('express') ; 
const fs = require('fs');
const  deploySmartContract  = require("../scFunctions/deploy") ; 
const {zilliqa, address, config} = require("../zil_wallet/zil") ; 


const miscRouter = express.Router() ; 



miscRouter.use((req, res, next)=>{
    next() ; 
}) ; 


miscRouter.post('/deploy', async function (req, res, next){
   
    const code = fs.readFileSync("./SmartContracts/ticket.scilla").toString();
    const init = [
        // this parameter is mandatory for all init arrays
        {
            vname: "_scilla_version",
            type: "Uint32",
            value: "0"
        },
        {
            vname: "contract_owner",
            type: "ByStr20",
            value: `${address}`
        },
        {
            vname: "name",
            type: "String",
            value: req.body.name 
        },
        {
            vname: "symbol",
            type: "String",
            value: req.body.symbol 
        }
    ]

    const confirmedTxn = await deploySmartContract(code, init) ;
    if (confirmedTxn){
        res.json({'success': 1, 'error' : null, 'data': {contractAddress : confirmedTxn}}) 
    } else {
        res.json({'success': 0, 'error' : 1, 'data': null}) 
    }

 
}) ; 

module.exports = miscRouter; 

