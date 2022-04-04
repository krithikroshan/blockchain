const {Long, bytes, units} = require('@zilliqa-js/util');
const {Zilliqa} = require('@zilliqa-js/zilliqa');
const {getAddressFromPrivateKey} = require('@zilliqa-js/crypto');

// initilalzing console 
const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
const CHAIN_ID = 333;
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);


privkey = '494759a0d541ccadb60da3e59f28add4f508db8e5f2e104d522114da10bb2ab7';

zilliqa.wallet.addByPrivateKey(
    privkey
);

const address = getAddressFromPrivateKey(privkey);
const myGasPrice = units.toQa('3000', units.Units.Li); // Gas Price that will be used by all transactions
const gasLimit = Long.fromNumber(40000) ; 

const config = {
    version : VERSION , 
    gasPrice : myGasPrice , 
    gasLimit : gasLimit 
}

module.exports = {zilliqa, address, config} ; 