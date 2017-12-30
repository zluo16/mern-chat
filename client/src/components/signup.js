import React, { Component } from 'react'
import * as actions from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Signup extends Component {

  state = {
    username: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = () => {
    this.props.actions.signup(this.state)
  }

  render() {
    return (
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
            <input type='button' value='Login' className='back-login' />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedSignup = connect(null, mapDispatchToProps)(Signup)
