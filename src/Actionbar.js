import React, { Component } from 'react';
import logo from './logo.svg';
import './Actionbar.css';
import profilePicture from '../img/profilePic.jpeg';
import likeBar from '../img/likebar.png';
import dlikeBar from '../img/dlikebar.png';
import star from '../img/star.png';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class ActionBar extends Component {
  render() {
    return (
      <div className="ActionBar">
        <ul className="ActioonBar">
          <li id="profilePicture"><a href="profile.html"><img id="profilePicture" src={profilePicture}/></a></li>
          <svg height="50" width="50">
            <polygon points="0,0 50,0 25,30" transform="translate(8, 0) scale(0.4) rotate(180 37 36)" fill="none" strokeWidth="3" stroke="grey"/>
          </svg>
          <svg height="50" width="50">
            <polygon points="0,0 50,0 25,30" transform="translate(17,15) scale(0.4) rotate(0 37 36)" fill="none" strokeWidth="3" stroke="grey"/>
          </svg>
          <svg height="50" width="50">
              <circle cx="25" cy="25" r="7" stroke="none" stroke-width="0" fill="#efe2e2" />
          </svg>
          <svg height="50" width="50">
              <circle cx="25" cy="25" r="7" stroke="none" stroke-width="0" fill="#efe2e2" />
          </svg>
          <svg height="50" width="50">
              <circle cx="25" cy="25" r="7" stroke="none" stroke-width="0" fill="#746d64" />
          </svg>
        </ul>
      </div>
    );
  }
}
export default ActionBar;
