import React, { Component } from 'react';
import logo from './logo.svg';
import './Artwork.css';
import upload from '../img/upload.svg';
import pomalogo from '../img/poma_logo.svg';
import profile from '../img/profile.svg';
import default1 from '../img/default.jpg';
import painting from '../img/painting.jpg';
import profilePicture from '../img/flash.png';
import Info from'./Info.js';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Artwork extends Component {
  render() {
    return (
      <div className="Artwork">
          <img className="MainPicture" src={default1} />
          <Info header='Beautiful Dog' description='A cute pup!' artist='Iris Scott' />
      </div>
    );
  }
}
export default Artwork;
