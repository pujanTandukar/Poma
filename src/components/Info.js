import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Info extends Component {
  render() {
    return (
      <div className="Info">
          <h1>{this.props.header}</h1>
          <h2>{this.props.description}</h2>
          <h3>{this.props.artist}</h3>
      </div>
    );
  }
}
export default Info;
