import React, { Component } from 'react';
import logo from './logo.svg';
import './Feed.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        <div className="Feed-Header">
          <div className = "Feed-NavBar">
            <ul>
            <li id="pomaPic"> <a href="home.html"> <img id="pomaPic" src={require("../img/poma_logo.svg")}/></a></li>
            <li id="uploadPic"> <a href="upload.html"> <img id="uploadPic" src={require("../img/upload.svg")}/></a></li>
            <li id="profilePic"><a href="profile.html"><img id="profilePic" src={require("../img/profile.svg")}/></a></li>

            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Feed;
