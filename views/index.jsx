var MainLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head><title>Wikiki</title></head>
        <body>
            <div id = "container"></div>
        </body>
        <script src="http://fb.me/react-0.12.2.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="/jsx/index.jsx"></script>
      </html>
    );
  }
});

module.exports = MainLayout;