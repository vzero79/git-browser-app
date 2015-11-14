'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Component,
  StyleSheet,
  TabBarIOS
} = React;

class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'feed'
    }
  }

  render(){
    return (
      <TabBarIOS style={styles.container}>
        <TabBarIOS.Item
          title="Feed"
          selected={this.state.selectedTab == 'feed'}
          icon={{uri: "inbox", isStatic: true}}
          onPress={() => this.setState({selectedTab: 'feed'})}
        >
          <Text style={styles.welcome}>Tab 1</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          selected={this.state.selectedTab == 'search'}
          icon={{uri: "search", isStatic: true}}
          onPress={() => this.setState({selectedTab: 'search'})}
        >
          <Text style={styles.welcome}>Tab 2</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

module.exports = AppContainer;