var RepoListBox = React.createClass({
  render: function() {
    server.GET('/allRepos', function (data) {
      React.render(
          <div>
            <AddRepoForm />
            <ReposList repos={data.repos}/>
          </div>,
            document.getElementById('container')
      );
    });
    return false;
  }
});

// Form to add Repo
var AddRepoForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    alert();
  },

  render: function () {
    return  (<form onSubmit={this.handleSubmit}>
              <input id="githuburl" type="text" placeholder="Github Url"></input>
              <input type="submit" value="Add"></input>
            </form>);
  }
})

// List of Repos
var ReposList = React.createClass({
  render: function () {
    return (
      <div className="repo"> {
        this.props.repos.map(
          function (repo) {
              return <p> @{repo.owner}/{repo.name} </p>;
          })
      }</div>
    );
  }
});