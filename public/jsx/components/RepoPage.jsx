var RepoPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1> @{this.props.owner}/{this.props.name}</h1>
                <RepoContent name={this.props.name} />
            </div>
            );
    }
});

var RepoContent = React.createClass({
    render: function () {
        return <div>"hello"</div>
    }
});