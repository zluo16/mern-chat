import React, { Component } from 'react'
import ChatContainer from './chatComponents/chatContainer'
import { ConnectedUsersList } from './usersComponents/usersList'

export default class HomeContainer extends Component {

  state = {}

  render() {
    return (
      <div className="wrapper">
        <ConnectedUsersList />
        <ChatContainer />
      </div>
    )
  }
}
