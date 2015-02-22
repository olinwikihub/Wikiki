var Repos = require('../models/repo');
var github = require('../github');


exports.index = function(req, res) {
    res.render('index', {
        name: 'John'
    });
};


exports.allRepos = function(req, res) {
    Repos.find({}, function(err, data) {
        errorHandler(err, "Failed to load repos");
        res.json({
            "repos": data
        });
    });
};

exports.addRepo = function(req, res) {
    // Check Github for URL and get Rep name and owner name
    var url = req.body.url;

    // Error Checking
    var index = url.indexOf("github.com/");
    if (index === -1) {
        res.status(200).json({
            error: "invalid github url"
        });
        return;
    }

    var parts = url.substring(index, url.length).split("/");
    if (parts.length !== 3) {
        res.status(200).json({
            error: "invalid github url"
        });
        return;
    }

    // Validate Github API
    github.validateREPO(parts[1], parts[2], function(err, data) {
        if (err) {
            res.status(200).json({
                error: "invalid github url"
            });
            return;
        }
        Repos({
            name: parts[2],
            owner: parts[1]
        }).save(function(err, data) {
            if (err) {
                res.status(500).json({
                    error: "Failed to save Repo"
                });
            }
            res.status(200).json({
                success: true
            });
        });
    });
}


var errorHandler = function(err, msg) {
    if (err) {
        res.status(500).json({
            error: msg + "::\t" + err,
        });
    }
}