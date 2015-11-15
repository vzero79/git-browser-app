'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Component,
  ListView,
  Image
} = React;

var moment = require('moment');

class PushPayload extends Component {
  constructor(props){
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });

    this.state = {
      dataSource: ds,
      pushEvent: props.pushEvent
    }
  }

  render(){
    return (
      <View style={{
        flex: 1,
        paddingTop: 80,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Image
          source={{uri: this.state.pushEvent.actor.avatar_url}}
          style={{
            height: 120,
            width: 120,
            borderRadius: 60
          }}
        />
      </View>
    );
  }
}

module.exports = PushPayload;