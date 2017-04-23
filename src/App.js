import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed.js';
import Profile from './Profile.js';
import ViewForm from './Viewform.js';
import Actionbar from './Actionbar.js';
import Info from './Info.js';

import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <HashRouter>
        <Route path="/" component={Info} />
      </HashRouter>
      )
  }
}

export default App;
