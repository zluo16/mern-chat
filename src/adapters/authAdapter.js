const axios = require('axios');

export default class AuthAdapter {
  static login(loginParams) {
    return axios.post('/api/login', loginParams);
  }

  static signup(signupParams) {
    return axios.post('/api/signup', signupParams);
  }

  static logout() {
    return fetch('/api/logout').then(res => res.json());
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}
