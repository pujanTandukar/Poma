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
        <ul>
          <li id="profilePicture"><a href="profile.html"><img id="profilePicture" src={profilePicture}/></a></li>
          <li id="likeBar"><img id="likeBar" src={likeBar}/></li>
          <li id="dlikeBar"><img id="dlikeBar" src={dlikeBar}/></li>
          <li id="star"><img id="star" src={star}/></li>
          <li id="star"><img id="star" src={star}/></li>
          <li id="star"><img id="star" src={star}/></li>
          <li id="star"><img id="star" src={star}/></li>
          <li id="star"><img id="star" src={star}/></li>

        </ul>
      </div>
    );
  }
}
export default ActionBar;
