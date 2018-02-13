import AuthAdapter from '../adapters/authAdapter'

export function login(loginParams) {
  return (dispatch) => {
    console.log('Logging in...');
    AuthAdapter.login(loginParams)
      .then(res => {
        console.log(res);
        if (res.error) {
          dispatch({ type: 'LOGIN_FAILED', payload: res.error })
          console.log('Login failed');
        } else {
          let user = {
            id: res._id,
            username: res.local.username,
            firstName: res.local.firstName,
            lastName: res.local.lastName
          }
          dispatch({ type: 'LOGGING_IN', payload: user })
          window.localStorage.setItem('user', JSON.stringify(user))
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

export function logout() {
  return (dispatch) => {
    console.log('Logging out...');
    AuthAdapter.logout()
      .then(res => {
        if (res.error) {
          console.log('Logout failed');
        } else {
          window.localStorage.clear();
          console.log(res.message);
          dispatch({ type: 'LOGOUT_USER' });
        }
      })
  }
}

export function isLoggedIn() {
  return !!localStorage.getItem('user');
}
