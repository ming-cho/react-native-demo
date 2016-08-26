import {connect} from 'react-redux';
import MessengerView from './MessengerView';

export default connect(
  state => ({
    messages: state.getIn(['messenger', 'messages']),
  })
)(MessengerView);