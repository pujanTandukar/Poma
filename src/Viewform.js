import React, { Component } from 'react';
import Artwork from './Artwork.js';
import Actionbar from './Actionbar.js';
import './Viewform.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Viewform extends Component {
  render() {
    return (
      <div id="container">
        <div className="Viewform">
            <Artwork />
            <Actionbar />
        </div>
      </div>
    );
  }
}
export default Viewform;
