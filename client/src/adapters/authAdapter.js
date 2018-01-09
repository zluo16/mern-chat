export default class AuthAdapter {
  static login(loginParams) {
    return fetch(`${apiUrl()}/api/login`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => {
      console.log(res);
      debugger
      res.json()
    })
  }

  static signup(signupParams) {
    return fetch(`${apiUrl()}/api/signup`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(signupParams)
    }).then(res => res.json())
  }
}

function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json'
  }
}

function apiUrl() {
  return 'http://localhost:8000'
}
