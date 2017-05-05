import React, { Component } from 'react';
import Artwork from './Artwork';
import ActionBar from './ActionBar';
import './Viewframe.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Viewform extends Component {
  render() {
    return (
      <div id="container">
        <div className="Viewform">
            <Artwork />
            <ActionBar />
        </div>
      </div>
    );
  }
}
export default Viewform;
