/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View
} = React;

var Login = require('./Login');

var GithubBrowser = React.createClass({
  render: function() {
    if(this.state.isLoggedIn){
      return (
        <View >
        </View>
      );
    }else{
      return (
        <Login onLogin={this.onLogin} />
      );
    }
  },
  onLogin: function(){
    this.setState({isLoggedIn: true});
  },
  getInitialState: function() {
    return {
      isLoggedIn: false
    };
  },
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
