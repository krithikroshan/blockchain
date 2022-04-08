require("@nomiclabs/hardhat-waffle");
const fs = import('fs')
// const privateKey = fs.readFileSync('.secret').toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    //  unused configuration commented out for now
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/8d9993bb0bdf4a848a5b8412081c800d",
      accounts: ['5c0abc5e682512404de211b4b8979dc074a2bd4b67b3af07a9e01fd58acf362c'],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/8d9993bb0bdf4a848a5b8412081c800d",
      accounts: ['5c0abc5e682512404de211b4b8979dc074a2bd4b67b3af07a9e01fd58acf362c'],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
