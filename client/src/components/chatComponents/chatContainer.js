import React, { Component } from 'react'
import { ConnectedMessageList } from './messageList'

export default class ChatContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Messages</h2>
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
