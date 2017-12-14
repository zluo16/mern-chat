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


{/* <div className="message-box left-img">
  <div className="picture">
    <h3>Kevin</h3>
  </div>
  <div className="message">
    <span>Bobby Giangeruso</span>
    <p>Hey Mike, how are you doing?</p>
  </div>
</div>
<div className="message-box right-img">
  <div className="picture">
    <h3>Mike</h3>
  </div>
  <div className="message">
    <span>Mike Moloney</span>
    <p>Pretty good, Eating nutella, nommommom</p>
  </div>
</div> */}
