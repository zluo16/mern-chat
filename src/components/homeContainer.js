import React, { Component } from 'react'
import ChatContainer from './chatComponents/chatContainer'
import Modal from 'react-modal'
import { ConnectedUsersList } from './usersComponents/usersList'
import { ConnectedUserProfile } from './profileComponents/UserProfile'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class HomeContainer extends Component {

  state = {}

  render() {
    return (
      <div className="wrapper">
        <Modal
          isOpen={true}
          style={customStyles}
        >
          <h2>Modal Here!</h2>
        </Modal>

        <ConnectedUsersList />
        <ChatContainer />
        <ConnectedUserProfile />
      </div>
    )
  }
}
