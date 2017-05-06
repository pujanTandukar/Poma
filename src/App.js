import React, { Component } from 'react';
import Viewframe from './components/Viewframe';
import Feed from './containers/Feed';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
          <Route exact path={"/"} component={Feed}/>
          <Route path="/viewframe" component={Viewframe}/>
          <Route path="/navbar" component={NavBar}/>
        </Switch>
      </BrowserRouter>
      )
  }
}

export default App;
