const {BN, Long, bytes, units} = require('@zilliqa-js/util');
const {zilliqa, address, config} = require("../zil_wallet/zil") ;

module.exports = async function transfer(SCAddress, toAddress, tokenID) {

    // const nftAddr = toBech32Address(SCAddress)//("79d662e621c08521a20f80e953417d981ddef0a6");
    try {
        const contract = zilliqa.contracts.at(SCAddress);
        // const callTx = await contract.callWithoutConfirm(
        //     'transfer',
        //     [   {
        //             vname: 'to',
        //             type: 'ByStr20',
        //             value: `${toAddress}`,
        //         },
        //         {
        //             vname: 'token_ID',
        //             type: 'uint256',
        //             value: tokenID,
        //         }
        //     ],
        //     {
        //         // amount, gasPrice and gasLimit must be explicitly provided
        //         version: config["version"],
        //         amount: new BN(0),
        //         gasPrice: config["gasPrice"],
        //         gasLimit: config["gasLimit"],
        //     }
        // );

        // // check the pending status
        // const pendingStatus = await zilliqa.blockchain.getPendingTxn(callTx.id);
        // console.log(`Pending status is: `);
        // console.log(pendingStatus.result);

        const callTx = await contract.call(
      'transfer',
            [
                {
                    vname: 'to',
                    type: 'ByStr20',
                    value: `${toAddress}`,
                },
                {
                    vname: 'token_ID',
                    type: 'uint256',
                    value: tokenID,
                }
            ],
      {
        //amount, gasPrice and gasLimit must be explicitly provided
                version: config["version"],
                amount: new BN(0),
                gasPrice: config["gasPrice"],
                gasLimit: config["gasLimit"],
      },
      33,
      1000,
      false,
    );
        // process confirm
        console.log(`The transaction id is:`, callTx.id);
        console.log(`Waiting transaction be confirmed`);
        const confirmedTxn = await callTx.confirm(callTx.id);
        return confirmedTxn ;

        console.log(`The transaction status is:`);
        console.log(confirmedTxn.receipt);

    } catch (err) {
        console.log(err);
        return null
    }
}
