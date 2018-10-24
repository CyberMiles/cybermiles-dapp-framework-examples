var express = require('express');
var router = express.Router();
var Web3 = require("web3-cmt")
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        name: 'CyberMiles',
        product: 'DApp framework example',
        version: 'one'
    });
});

module.exports = router;