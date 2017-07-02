var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var path = require('path');

//Defining routes
router.route('/api/friends')
    .get(function(req, res) {
        res.send('GET API FRIENDS');
    })
    .post(function(req, res) {
        res.send('post api friends');
    })


module.exports = router;