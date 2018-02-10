import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedHomeContainer } from './components/homeContainer'
import { ConnectedLogin } from './components/login'
import { ConnectedSignup } from './components/signup'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/' component={ConnectedHomeContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
