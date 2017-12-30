import AuthAdapter from '../adapters/authAdapter'

export function login(loginParams) {
  return (dispatch) => {
    // dispatch({ type: 'LOGGING_IN' })
    console.log('Logging in...');
    AuthAdapter.login(loginParams)
      .then(res => {
        if (res.error) {
          // dispatch({ type: 'LOGIN_FAILED', payload: res.error })
          console.log('Login failed');
        } else {
          debugger
        }
      })
  }
}

export function singup(signupParams) {
  return (dispatch) => {
    console.log('Signing Up');
    AuthAdapter.signup(signupParams)
      .then(res => {
        if (res.error) {
          console.log('Signup failed');
        } else {
          debugger
        }
      })
  }
}
