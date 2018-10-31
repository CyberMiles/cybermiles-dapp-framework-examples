var Web3 = require("web3-cmt");
var web3 = undefined;

module.exports = {
    initBlockchain: function() {
        if (typeof web3 == 'undefined') {
            console.log('Initializing connection to the blockchain ...');
            //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
            web3 = new Web3(new Web3.providers.HttpProvider("http://ec2-54-86-192-188.compute-1.amazonaws.com:8545"))
            console.log('Success!');
        } else {
            console.log('Already initialized = ' + web3.currentProvider.isConnected());
        }

        },
    isConnected: function() {
        console.log(web3.currentProvider.isConnected());
    },
    getAccounts: function() {
        console.log(web3.cmt.accounts);
    },
    isSyncing(){
        console.log(web3.cmt.syncing);
    }
};