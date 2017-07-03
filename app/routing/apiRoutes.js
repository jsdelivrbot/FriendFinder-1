var express = require('express'),
    router = express.Router(),
    friends = require('../data/friends');

//Create e chaining route to post and return json file
router.route('/api/friends')
    .post(function(req, res) {
        //Parse the user data and create a variable to hold user's score and create a variable to calculate the difference
        var userData = req.body,
            userScores = userData.scores,
            totalDifference = 0,
            bestMatch = {
                name: '',
                photo: '',
                friendDifference: 1000
            };

        for (var i = 0; i < friends.length; i++) {
            //Loop through friends object
            console.log(friends[i].name);
            console.log(friends[i].score);
            //Loop through user's data and calculate the difference
        }
        //push user Data to friends
        friends.push(userData);
        // Return a JSON with the user's bestMatch. 
        res.json(bestMatch);
    })
    .get(function(req, res) {
        res.json(friends);
    });

module.exports = router;