import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedChatContainer } from './chatComponents/chatContainer'
import Modal from 'react-modal'
import { ConnectedUsersList } from './usersComponents/usersList'
import { ConnectedUserProfile } from './profileComponents/UserProfile'
import * as authActions from '../actions/authActions'
import * as messageActions from '../actions/messageActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import io from 'socket.io-client'

const socketUrl = `http://localhost:${process.env.SOCKET_PORT}`
const socket = io.connect(socketUrl);

const customStyles = {
  content : {
    top          : 0,
    left         : 0,
    height       : '100%',
    width        : '100%',
    padding      : 0,
    border       : 0,
    borderRadius : 0,
    margin       : '0'
  }
};


export class HomeContainer extends Component {

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    modalOpen: true,
    loginForm: true
  }

  componentDidMount() {
    let isLoggedIn = !localStorage.getItem('user');
    this.setState({ modalOpen: isLoggedIn });
    // Connect to webSockets
    socket.on('messages', (messages) => {
      this.props.actions.updateMessages(messages)
    })
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleForms = () => {
    this.setState({ loginForm: !this.state.loginForm })
  }

  onSubmitLogin = (event) => {
    event.preventDefault()
    let loginParams = Object.assign({},
      { username: this.state.username },
      { password: this.state.password }
    );
    this.props.actions.login(loginParams)
    this.setState({ modalOpen: false });
  }

  onSubmitSignUp = (event) => {
    event.preventDefault();
    let signupParams = Object.assign({},
      { firstName: this.state.firstName },
      { lastName: this.state.lastName },
      { username: this.state.username },
      { password: this.state.password }
    );
    this.props.actions.signup(signupParams);
    this.setState({ modalOpen: false });
  }

  onLogout = () => {
    this.props.actions.logout();
    this.setState({ modalOpen: true });
  }

  render() {
    return (
      <div className="wrapper">
        <Modal
          isOpen={this.state.modalOpen}
          style={customStyles}
        >
          {this.state.loginForm ?
            <div className='login login-grid'>
              <form className='form-box' onSubmit={this.onSubmitLogin}>
                <h1>Login..</h1>

                <div className='content'>
                  <input
                    name='username'
                    placeholder='Username'
                    type='text'
                    onChange={this.onInputChange}
                  />
                  <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={this.onInputChange}
                  />
                </div>

                <div className='form-footer'>
                  <input type='submit' value='Login' className='login-button' />
                  <input
                    type='button'
                    value='SignUp'
                    className='signup-button'
                    onClick={this.toggleForms}
                  />
                </div>
              </form>
            </div>
            :
            <div className='login'>
              <form className='form-box'>
                <h1>Sign Up..</h1>

                <div className='content'>
                  <input
                    name='username'
                    placeholder='Username'
                    type='text'
                    onChange={this.onInputChange}
                  />
                  <input
                    name='firstName'
                    placeholder='First Name'
                    type='text'
                    onChange={this.onInputChange}
                  />
                  <input
                    name='lastName'
                    placeholder='Last Name'
                    type='text'
                    onChange={this.onInputChange}
                  />
                  <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    onChange={this.onInputChange}
                  />
                </div>

                <div className='form-footer'>
                  <input type='submit' value='SignUp' className='signup-submit' />
                  <input
                    type='button'
                    value='Login'
                    className='back-login'
                    onClick={this.toggleForms}
                  />
                </div>
              </form>
            </div>
          }
        </Modal>

        <ConnectedUsersList />
        <ConnectedChatContainer onLogout={this.onLogout} currentUser={this.state.user} />
        <ConnectedUserProfile />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const combinedActions = Object.assign({}, authActions, messageActions);
  return { actions: bindActionCreators(combinedActions, dispatch) };
};

export const ConnectedHomeContainer = connect(null, mapDispatchToProps)(HomeContainer);
