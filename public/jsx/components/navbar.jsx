var CommentBox = React.createClass({
  getAllRepos: function () {
    server.GET('/allRepos', function (data) {
        console.log(data);
    });
  },
  render: function() {
    return (
      <button onClick={this.getAllRepos} className="commentBox">
        Hello, world! I am a CommentBox.
      </button>
    );
  }
});