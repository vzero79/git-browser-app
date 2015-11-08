'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var Login = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: "Octocat", isStatic: true}} />
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center'
  },
  logo: {
    height: 66,
    width: 55
  }
});

module.exports = Login;