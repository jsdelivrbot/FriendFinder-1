var express = require('express'),
    router = express.Router();
var friends = require("../data/friends");

var i = 0;
var user = [];

function compareScore(score) {
    score.forEach(function(element) {
        console.log('element: ' + element);
        if (element === element) {
            var num = [];
            num.push(element);
            console.log('find equal:' + num);
        }
    });
};

//Create e chaining route
router.route('/api/friends')
    .post(function(req, res) {

        user.push(result);
        console.log(result);
        console.log('users ' + i + ' score: ' + req.body.scores);

        for (var count = 0; count < req.body.scores; count++) {
            console.log('score for loop: ' + req.body[count].scores);
        }
        var score = [];
        score.push(req.body.scores);
        console.log("score array here: " + score);
        compareScore(score);
    })
    .get(function(req, res) {
        var resultJson = JSON.stringify(user);
        res.json(user);
    });
i++;

module.exports = router;