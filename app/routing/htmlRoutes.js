var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var path = require('path');

//Defining routes
router.route('/')
    .get(function(req, res) {
        //res.send('index page');
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

router.route('/survey')
    .get(function(req, res) {
        // res.send('survey page');
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

module.exports = router;