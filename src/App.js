import React, { Component } from 'react';
import Logo from './logo.svg';
import Sass from './App.css';
import Feed from './Feed';
import Profile from './Profile';
import Viewframe from './Viewframe';
import ActionBar from './ActionBar';
import Info from './Info';
import {BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Viewframe}/>
          <Route path="/viewframe" component={Viewframe}/>
          <Route path="/actionbar" component={ActionBar}/>
        </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
