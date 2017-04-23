import React, { Component } from 'react';
import logo from './logo.svg';
import './Feed.css';
import upload from '../img/upload.svg';
import pomalogo from '../img/poma_logo.svg';
import profile from '../img/profile.svg';
import default1 from '../img/default.jpg';
import painting from '../img/painting.jpg';
import profilePicture from '../img/flash.png';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        <div className="NavBar">
          <ul>
            <li id="pomaPic"> <a href="home.html"> <img id="pomaPic" src={pomalogo}/></a></li>
            <li id="uploadPic"> <a href="upload.html"> <img id="uploadPic" src={upload}/></a></li>
            <li id="profilePic"><a href="profile.html"><img id="profilePic" src={profile}/></a></li>
            </ul>
          </div>
          <img className="MainPicture" src={default1}/>
          <img className="MainPicture2" src={painting}/>
          <img className="MainPicture" src={default1}/>
          <img className="profilePicture" src={profilePicture}/>
      </div>
    );
  }
}

export default Feed;
