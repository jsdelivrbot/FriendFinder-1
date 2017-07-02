var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var i = 0;
var user = [];

//Defining routes
router.route('/api/friends')
    .post(function(req, res) {
        var result = JSON.stringify(req.body);
        user.push(result);
        console.log(result);


    })
    .get(function(req, res) {
        var resultJson = JSON.stringify(user);
        res.json(user);
    });

module.exports = router;