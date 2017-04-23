import React, { Component } from 'react';
import './Container.css';
import Viewform from'./Viewform.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Container extends Component {
  render() {
    return (
      <div className="Container">
          <Viewform />
      </div>
    );
  }
}
export default Container;
