import * as headers from './headers.js'

export default class AuthAdapter {
  static login(loginParams) {
    return fetch('/api/login', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static signup(signupParams) {
    return fetch('/api/signup', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(signupParams)
    }).then(res => res.json())
  }
}
