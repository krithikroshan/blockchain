describe("NFTMarket", function() {
  it("Should create and execute market sales", async function() {
    /* deploy the marketplace */
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace")
    const nftMarketplace = await NFTMarketplace.deploy()
    await nftMarketplace.deployed()

    let listingPrice = await nftMarketplace.getListingPrice()
    listingPrice = listingPrice.toString()

    const auctionPrice = ethers.utils.parseUnits('1', 'ether')

    await nftMarketplace.createToken("", auctionPrice, { value: listingPrice })
    await nftMarketplace.createToken("", auctionPrice, { value: listingPrice })
      
    const [_, buyerAddress] = await ethers.getSigners()
  
    await nftMarketplace.connect(buyerAddress).createMarketSale(1, { value: auctionPrice })

    await nftMarketplace.connect(buyerAddress).resellToken(1, auctionPrice, { value: listingPrice })

    items = await nftMarketplace.fetchMarketItems()
    console.log('items: ', items)
  })
})