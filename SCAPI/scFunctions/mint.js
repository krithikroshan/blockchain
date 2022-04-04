const { zilliqa, address, config } = require("../zil_wallet/zil");
const { BN, Long, bytes, units } = require("@zilliqa-js/util");

module.exports = async function mint(SCAddress, toAddress, tokenURI) {
  try {
    const contract = zilliqa.contracts.at(SCAddress);
    console.log(SCAddress);
    const callTx = await contract.call(
      "mint",
      [
        {
          vname: "to",
          type: "ByStr20",
          value: `${toAddress}`,
        },
        {
          vname: "token_uri",
          type: "String",
          value: `${tokenURI}`,
        },
      ],
      {
        //amount, gasPrice and gasLimit must be explicitly provided
        version: config["version"],
        amount: new BN(0),
        gasPrice: config["gasPrice"],
        gasLimit: config["gasLimit"],
      },
      33,
      1000
    );

    // Retrieving the transaction receipt (See note 2)
    console.log(JSON.stringify(callTx.receipt, null, 4));

    // process confirm
    console.log(`The transaction id is:`, callTx.id);
    console.log(`Waiting transaction be confirmed`);
    // const confirmedTxn = await callTx.confirm(callTx.id);
    return callTx.id;
  } catch (err) {
    console.log(err);
    return null;
  }
};
