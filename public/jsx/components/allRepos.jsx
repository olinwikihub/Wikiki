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

    var input = $('input#githuburl').val();

    server.POST('/addRepo', {url: input}, function (data) {
      console.log(data.error);
      if (data.error) {
        alert("Make sure URL is an existing Github HTTPS Clone URL");
        return;
      }

      React.render(
        <RepoListBox />,
        document.getElementById('container')
      );
    });
  },

  render: function () {
    return  (<form onSubmit={this.handleSubmit}>
              <input id="githuburl" type="text" placeholder="HTTPS clone URL"></input>
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