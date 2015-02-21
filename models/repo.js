var mongoose = require('mongoose');

var repo_schema = mongoose.Schema({
      name: String
    , owner: String
});

module.exports = mongoose.model("Repo", repo_schema);