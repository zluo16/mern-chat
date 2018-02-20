import React, { Component } from 'react'
import { ConnectedMessageList } from './messageList'
import * as actions from '../../actions/currentUserActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class ChatContainer extends Component {

  componentDidMount() {
    this.props.actions.addCurrentUser(JSON.parse(localStorage.getItem('user')));
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.currentUser !== nextProps.currentUser) {
  //     this.setState({ currentUser: nextProps.currentUser });
  //   }
  // }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Welcome {!!this.props.currentUser ? this.props.currentUser.firstName : null}</h2>
          <input
            type='button'
            value='Logout'
            className='logout-button'
            onClick={this.props.onLogout}
          />
          <a href="#" title="Add Friend to this chat">+</a>
        </div>
        <div className="chat-box">
          <ConnectedMessageList />
          <div className="enter-message">
            <input type="text" placeholder="Enter your message.."/>
            <a href="#" className="send">Send</a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
