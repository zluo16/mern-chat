import React, { Component } from 'react'
import ChatContainer from './chatComponents/chatContainer'
import Modal from 'react-modal'
import { ConnectedUsersList } from './usersComponents/usersList'
import { ConnectedUserProfile } from './profileComponents/UserProfile'
import * as actions from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    loginForm: true
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleForms = () => {
    this.setState({ loginForm: !this.state.loginForm })
  }

  onSubmitLogin = () => {
    let loginParams = Object.assign({},
      { username: this.state.username },
      { password: this.state.password }
    )
    this.props.actions.login(loginParams)
  }

  render() {
    return (
      <div className="wrapper">
        <Modal
          // className='modal-overlay'
          isOpen={true}
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
        <ChatContainer />
        <ConnectedUserProfile />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedHomeContainer = connect(null, mapDispatchToProps)(HomeContainer)
