/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  ActivityIndicatorIOS
} = React;

var Login = require('./Login');
var AppContainer = require('./AppContainer');
var AuthService = require('./AuthService');

var GithubBrowser = React.createClass({
  componentDidMount: function(){
    AuthService.getAuthInfo((err, authInfo) => {
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      })
    })
  },

  render: function() {
    if(this.state.checkingAuth){
      return (
        <View >
          <ActivityIndicatorIOS
            animating={true}
            size="large" />
        </View>
      );
    }

    if(this.state.isLoggedIn){
      return (
        <AppContainer />
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
      isLoggedIn: false,
      checkingAuth: true
    };
  },
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
