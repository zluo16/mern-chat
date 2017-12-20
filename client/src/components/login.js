import React, { Component } from 'react'

export default class Login extends Component {

  state = {}

  render() {
    return (
      <div className='login login-grid'>
        <form className='form-box'>
          <h1>Login..</h1>

          <div className='content'>
            <input name='username' placeholder='Username' type='text' />
            <input name='password' placeholder='Password' type='password' />
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
