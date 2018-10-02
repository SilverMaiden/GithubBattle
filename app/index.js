var React = require('react');
var ReactDom = require('react-dom');
require('./index.css');

    // state
    // lifecycle events
    // UI

var App = require('./components/App');

ReactDom.render(
    <App />,
    document.getElementById('app')
)
