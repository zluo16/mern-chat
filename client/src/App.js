import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './components/homeContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/home' component={HomeContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
