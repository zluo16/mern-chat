import React, { Component } from 'react'
import * as actions from '../actions/authActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = () => {
    this.props.actions.login(this.state);
  }

  render() {
    return (
      <div className='login login-grid'>
        <form className='form-box' onSubmit={this.onSubmit.bind(this)}>
          <h1>Login..</h1>

          <div className='content'>
            <input
              name='username'
              placeholder='Username'
              type='text'
              onChange={this.onInputChange.bind(this)}
            />
            <input
              name='password'
              placeholder='Password'
              type='password'
              onChange={this.onInputChange.bind(this)}
            />
          </div>

          <div className='form-footer'>
            <input type='submit' value='Login' className='login-button' />
            <input type='submit' value='SignUp' className='signup-button' />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const ConnectedLogin = connect(null, mapDispatchToProps)(Login)
