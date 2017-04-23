import React, { Component } from 'react';
import logo from './logo.svg';
import './Artwork.css';
import upload from '../img/upload.svg';
import pomalogo from '../img/poma_logo.svg';
import profile from '../img/profile.svg';
import default1 from '../img/default.jpg';
import painting from '../img/painting.jpg';
import profilePicture from '../img/flash.png';
import Info from './Info.js';
import ActionBar2 from './Actionbar.js';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Artwork extends Component {
  constructor(props) {
  super(props);
  this.state = {
    image: 'loading...'
  }
    this.loadImageFromServer = this.loadImageFromServer.bind(this);
  }
  loadImageFromServer() {

  }
  loadTitleFromServer() {

  }
  loadDescriptionFromServer() {

  }
  componentDidMount() {
    this.loadImageFromServer();
    this.loadImageFromServer();
    this.loadDescriptionFromServer();
  }
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
