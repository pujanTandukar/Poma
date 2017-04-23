import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed.js';
import Profile from './Profile.js';
import Container from './Container.js';

import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <HashRouter>
        <Route path="/" component={Container} />
      </HashRouter>
      )
  }
}

export default App;
