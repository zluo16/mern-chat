import AuthAdapter from '../adapters/authAdapter'

export function login(loginParams) {
  return (dispatch) => {
    console.log('Logging in...');
    AuthAdapter.login(loginParams)
      .then(res => {
        console.log(res.data);
        if (res.error) {
          dispatch({ type: 'LOGIN_FAILED', payload: res.error })
          console.log('Login failed');
        } else {
          let user = {
            id: res.data._id,
            username: res.data.local.username,
            firstName: res.data.local.firstName,
            lastName: res.data.local.lastName
          }
          dispatch({ type: 'LOGGING_IN', payload: user })
          dispatch({ type: 'ADD_CURRENT_USER', payload: user })
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
          let user = {
            id: res.data._id,
            username: res.data.local.username,
            firstName: res.data.local.firstName,
            lastName: res.data.local.lastName
          };
          dispatch({ type: 'LOGGING_IN', payload: user });
          dispatch({ type: 'ADD_CURRENT_USER', payload: user });
          window.localStorage.setItem('user', JSON.stringify(user));
        };
      });
  };
};

export function logout() {
  return (dispatch) => {
    console.log('Logging out...');
    AuthAdapter.logout()
      .then(res => {
        if (res.error) {
          console.log('Logout failed');
        } else {
          window.localStorage.clear();
          console.log(res.data.message);
          dispatch({ type: 'LOGOUT_USER' });
          dispatch({ type: 'REMOVE_USER' })
        }
      })
  }
}

export function isLoggedIn() {
  return !!localStorage.getItem('user');
}
