const express = require('express');
const app = express();
const Web3 = require('web3');
const artifacts = require('./contracts/Dex.json');
const contract = require("@truffle/contract");
const routes = require('./routes.js');

const contractAddress = "0xbbE1AB161ccc60cB80415B42dDcC478345697Dd4";


if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider); 
} else {
    var web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/619f4d8452fa4ddc8d6e92b899e8228a'));
}

const Dex = contract(artifacts);
Dex.setProvider(web3.currentProvider);


app.use(express.json());

const getDexContract = async () => {
    const dex = await Dex.at(contractAddress);
    return dex;
}



getDexContract().then( async (dex) => {   
    routes(app, dex);
    app.listen(3000, () => {
        console.log('listening on port '+ (3000));
    });
})  



