import { NIIFI } from './TokenDetails';
const { Contract } = require('ethers');
const abi = require('./ERC20ABI.json')

// const options = {
//   address: '0xeeDac875D220dDf082F6aD4268758F9E37Eb6C0d', // your (target) address
//   provider: providers.getDefaultProvider(network), // network = mainnet/testnet/etc (you can omit network if your target is mainnet)
// }

export const getERC20TokenBalance = async (options) => {
  const contract = new Contract(NIIFI.tokenAddress, abi, options.provider);
  const balance = await contract.balanceOf(options.address);
  const decimals = await contract.decimals() 
  const lamports = 10 ** decimals
	const ERC20TokenBalance = parseFloat((balance / lamports).toFixed(3))
  return ERC20TokenBalance
};