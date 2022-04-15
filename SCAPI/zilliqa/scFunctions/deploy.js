const { zilliqa, address, config } = require("../zil_wallet/zil");

module.exports = async function deploySmartContract(code, init) {
  const contract = zilliqa.contracts.new(code, init);

  try {
    console.log("Deploying");
    console.log(init);
    const [deployTx, nft] = await contract.deploy(
      {
        version: config["version"],
        gasPrice: config["gasPrice"],
        gasLimit: config["gasLimit"],
      },
      33,
      1000,
      false
    );

    // process confirm
    console.log(`The transaction id is:`, deployTx.id);
    console.log(`Waiting transaction be confirmed`);
    // const confirmedTxn = await deployTx.confirm(deployTx.id);
    console.log(nft.address);
    return nft.address;
  } catch (e) {
    console.error(e);
    return null;
  }
};
