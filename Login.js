'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} = React;

var Login = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: "Octocat", isStatic: true}} />
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Github username" />
        <TextInput
          style={styles.input}
          placeholder="Github password"
          secureTextEntry="true" />
      </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  logo: {
    height: 66,
    width: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  }
});

module.exports = Login;