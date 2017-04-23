import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './Feed.js';
import Profile from './Profile.js';
import Viewform from './Viewform.js';
import Actionbar from './Actionbar.js';
import Info from './Info.js';

import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <HashRouter>
        <Route path="/" component={Actionbar} />
      </HashRouter>
      )
  }
}

export default App;
