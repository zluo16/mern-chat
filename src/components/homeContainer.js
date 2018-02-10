import React, { Component } from 'react'
import ChatContainer from './chatComponents/chatContainer'
import Modal from 'react-modal'
import { ConnectedUsersList } from './usersComponents/usersList'
import { ConnectedUserProfile } from './profileComponents/UserProfile'

const customStyles = {
  // overlay: {
  //   position   : 'fixed',
  //   top        : 0,
  // },
  content : {
    top          : 0,
    left         : 0,
    height       : '100%',
    width        : '100%',
    margin       : '0'
  }
};


export default class HomeContainer extends Component {

  state = {}

  render() {
    return (
      <div className="wrapper">
        <Modal
          // className='modal-overlay'
          isOpen={true}
          style={customStyles}
        >
          <div>
            <h2>Modal Here!</h2>
          </div>
        </Modal>

        <ConnectedUsersList />
        <ChatContainer />
        <ConnectedUserProfile />
      </div>
    )
  }
}
