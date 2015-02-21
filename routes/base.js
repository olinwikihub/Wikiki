var Repos = require('../models/repo');


exports.index = function(req, res) {
  res.render('index', { name: 'John'});
};


exports.allRepos = function(req, res) {
    Repos.find({}, function (err, data) {
        errorHandler(err, "Failed to load repos");
        res.json({"repos": data});
    });
};

exports.addRepo = function (req, res) {
    Repos({
          name: "Wikiki"
        , owner: "hdavidzhu"
    }).save(function (err, data) {
        errorHandler(err, "Added a repo. DON'T DO DIS");
        console.log("Add a repo " + err);
        res.end();
    });
}


var errorHandler = function (err, msg) {
    if (err) {
        res.status(500).json({
            error: msg + "::\t" +  err,
        });
    }
}