const axios = require('axios');

export function updateUsers() {
  return (dispatch) => {
    fetch('/api/users').then(res => res.json())
      .then(users => {
        dispatch({ type: 'UPDATE_USERS', payload: users });
      })
  };
};

export function selectUser(username) {
  return (dispatch) => {
    fetch(`/api/${username}`).then(res => res.json())
      .then(user => {
        dispatch({ type: 'LOAD_USER', payload: user });
        window.localStorage.setItem('friend', user);
      });
  }
}
