
function routes(app, dex){

    app.get('/dex', async (req, res)  => {
        try{
            
            const numOfBuys = await dex.numOfBuys.call();
            const numOfSells = await dex.numOfSells.call();
            const buyRateInWei = await dex.buyRate.call();
            const sellRateInWeI = await dex.sellRate.call();
            const buyRateInEth = buyRateInWei / (10 ** 18);
            const sellRateInEth = sellRateInWeI / (10 ** 18);
            const rates = {
                buy: `1 TTD = ${Number.parseFloat(buyRateInEth).toFixed(14)} ETH`,
                sell: `1 TTD = ${Number.parseFloat(sellRateInEth).toFixed(15)} ETH`
            };
            const dexContractAddress = dex.address;
            const ttdAddress = await dex.getTestTokenDexContractAddress.call();
            const testTokenContractAddress = ttdAddress;
            res.status(200).json({numOfBuys, numOfSells, rates, dexContractAddress, testTokenContractAddress});
        }catch(error){
            console.log(error);
            res.status(400).json({message: "Error fetching information"})
        }
      })
}

module.exports = routes;