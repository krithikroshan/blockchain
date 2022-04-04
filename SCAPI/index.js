const express = require('express') ; 
const bodyParser = require('body-parser'); 
const serverless = require('serverless-http');
// const cors = require('cors')

// Express App
const app = express() ; 
const port = process.env.PORT || 4000 ; 

const testRouter = require("./test") ; 
const miscRouter = require("./scRouters/misc") ; 
const ticketRouter = require("./scRouters/ticket")

// app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use("/test", testRouter) ; 
app.use("/misc", miscRouter) ; 
app.use("/ticket", ticketRouter) ; 
// setting up the express server

app.listen(port, () => {
    console.log('API is online') ; 
}) ; 

module.exports.handler = serverless(app);