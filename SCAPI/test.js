const express = require('express') ; 
const testRouter = express.Router() ; 



testRouter.use((req, res, next)=>{
    next() ; 
}) ; 


testRouter.get('/ping', function (req, res, next){
    res.send('hello') ; 
}) ; 

module.exports = testRouter; 

    