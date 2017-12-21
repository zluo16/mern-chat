import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './components/homeContainer'
import { ConnectedLogin } from './components/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/login' component={ConnectedLogin} />
            <Route path='/home' component={HomeContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
