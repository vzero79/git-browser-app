/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var Login = require('./Login');

var GithubBrowser = React.createClass({
  render: function() {
    var message = 'hello there';
    return (
      <Login />
    );
  }
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
