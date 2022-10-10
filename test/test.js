const express = require('express');
const chai = require('chai');
const request = require('supertest');
const { expect } = require('chai');

const app = express();

describe('Get Query Dex Smart Contract', () => {
    it('should query dex smart contract and fetch all relevant data points', () => {
        request(app)
        .get('/dex')
        .send({})
        .expect(200)
        .then((res) => {
            expect(res.body.rates.buy).to.equal("1 TTD = 0.00000000000001 ETH");
            expect(res.body.rates.sell).to.equal("1 TTD = 0.000000000000005 ETH");
            expect(res.body.dexContractAddress).to.equal("0xbbE1AB161ccc60cB80415B42dDcC478345697Dd4");
            expect(res.body.testTokenContractAddress).to.equal("0x126Bbd854A7951889BaA685e85FF1a3BffC6124E");
            
        });
    });
});