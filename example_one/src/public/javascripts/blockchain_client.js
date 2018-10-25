var Web3 = require("web3-cmt");

module.exports = {
    initBlockchain: function() {
        console.log('Initializing connection to the blockchain ...');
        var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        console.log('Success!');
        },
    otherFunction: function() {
        console.log('Testing 1, 2!');
    }
};