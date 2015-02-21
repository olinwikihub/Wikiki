var MainLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head><title>Wikiki</title></head>
        <body>
            <div id = "container"></div>
            <div id = "navbar"></div>
        </body>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="http://fb.me/react-0.12.2.js"></script>
        <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/showdown/0.3.1/showdown.min.js"></script>
        <script type="text/javascript" src="/javascripts/server.js"></script>
        <script type="text/jsx" src="/jsx/components/navbar.jsx"></script>
        <script type="text/jsx" src="/jsx/index.jsx"></script>
      </html>
    );
  }
});

module.exports = MainLayout;




// https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/JSXTransformer.js

// https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react-with-addons.js

// Copy
// https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react-with-addons.min.js

// https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.js

// https://cdnjs.cloudflare.com/ajax/libs/react/0.12.2/react.min.js