import React, { Component } from 'react'
import { ConnectedMessageList } from './messageList'

export default class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const my = JSON.parse(localStorage.getItem('user'));

    return (
      <div className="container">
        <div className="header">
          {!!my ? <h2>Welcome {my.firstName}</h2> : null}
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
