import React, {PropTypes} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  Platform,
  View
} from 'react-native';
import {firebaseApp} from '../../utils/firebase';
import * as MessengerState from './MessengerState';

//FIXME
if (Platform.OS == 'ios') {
  var UserName = 'ios';
  var AvatarUrl = 'https://source.unsplash.com/sseiVD2XsOk/100x100';
} else {
  var UserName = 'android';
  var AvatarUrl = 'https://source.unsplash.com/2Ts5HnA67k8/100x100';
}
const BucketName = 'messages'

class MessengerView extends Component {

  constructor(props) {
    super(props);
    this.messagesRef = this.getRef().child(BucketName);
  }

  componentDidMount() {
    this.messagesRef.on('child_added', (child) => this.handleReceive(child.key(), child.val()));
  }

  render() {
    return (
      <View style={{marginTop: CONTAINER_MARGIN}}>
        <GiftedChat
          styles={{
            bubbleRight: {
              marginLeft: 70,
              backgroundColor: '#007aff',
            },
          }}
          messages={this.props.messages}
          onSend={this.handleSend.bind(this)}
        />
      </View>
    );
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  handleReceive(key, val) {
    const message = {
      text: val.text,
      name: val.name,
      image: {uri: val.avatarUrl || 'https://facebook.github.io/react/img/logo_og.png'},
      position: val.name == UserName && 'right' || 'left',
      date: new Date(child.val().date),
      uniqueId: key
    }
    this.props.dispatch(MessengerState.receive(message))
  }

  handleSend(message={}) {
    this.messagesRef.push({
      text: message.text,
      name: UserName,
      avatarUrl: AvatarUrl,
      date: new Date().getTime()
    })
  }
}

export default MessengerView;