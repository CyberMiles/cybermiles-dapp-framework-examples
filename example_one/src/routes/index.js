var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        name: 'CyberMiles',
        product: 'DApp framework example',
        version: 'one',
    });
});

module.exports = router;