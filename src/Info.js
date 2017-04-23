import React, { Component } from 'react';
import logo from './logo.svg';
import './Info.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Info extends Component {
  render() {
    return (
      <div className="Info">
          <h1> Header </h1>
          <h2> Description </h2>
          <h3> Artist Name </h3>
      </div>
    );
  }
}
export default Info;
