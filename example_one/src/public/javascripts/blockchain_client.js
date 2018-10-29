var Web3 = require("web3-cmt");
var web3 = undefined;

module.exports = {
    initBlockchain: function() {
        console.log('Initializing connection to the blockchain ...');
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
        console.log('Success!');

        },
    isConnected: function() {
    	console.log("web3.currentProvider.isConnected()");
    	console.log(web3.currentProvider.isConnected());
    },
    getBlockchain: function() {
    	return web3;
    }
};