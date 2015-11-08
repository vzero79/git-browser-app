'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Component
} = React;

class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: "Octocat", isStatic: true}} />
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="Github username" />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          placeholder="Github password"
          secureTextEntry="true" />
        <TouchableHighlight
          style={styles.button}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
});

module.exports = Login;