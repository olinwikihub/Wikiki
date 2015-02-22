var request = require('request');
var https = require('https');

// request.debug = true;

var API = "https://api.github.com/";

exports.validateREPO = function(user, repo, callback) {
    request
        .get(API + "repos/" + user + "/" + repo, {
            headers: {
                "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'
            }
        }, function(err, response, body) {
            console.log(API + "repos/" + user + "/" + repo);
            if (response.statusCode !== 200) {
                callback({
                    err: "Cannot find Github Repo"
                });
            }
            console.log(response.body); // 200
            callback(null, true);
        }).on('error', function(err) {
            callback(err);
        });
}