'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Component,
  ListView,
  ActivityIndicatorIOS
} = React;

class Feed extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds,
      showProgress: true
    }
  }

  componentDidMount(){
    this.fetchFeed();
  }

  fetchFeed(){
    require('./AuthService').getAuthInfo((err, authInfo) => {
      var url = 'https://api.github.com/users/' + authInfo.user.login + '/received_events';

      fetch(url, {
        headers: authInfo.header
      })
      .then((response) => response.json())
      .then((responseData) => {
        var feedItems =
            responseData.filter((ev) =>
              ev.type == 'IssueCommentEvent');
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(feedItems),
          showProgress: false
        })
      })
    })
  }

  renderRow(rowData){
    return <Text style={{
      color: '#333',
      backgroundColor: '#fff',
      alignSelf: 'center'
    }}>
      {rowData.actor.login}
    </Text>
  }

  render(){
    if (this.state.showProgress){
      return (
        <View style={{
          flex: 1,
          justifyContent: 'center'
        }}>
          <ActivityIndicatorIOS
            size="large"
            animating={true} />
        </View>
      );
    }
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start'
      }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

module.exports = Feed;