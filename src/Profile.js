import React, { Component } from 'react';
import logo from './logo.svg';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="Profile-Header">

          <div className = "Profile-NavBar">
            <ul>
             <li id = "uploadPic"><a href=".html"><img id="uploadPic" src={require("./profile.png")}/></a> </li>

             <li id = "profilePic"><a href="aboutMe.html"><img id="profilePic" src={require("./profile.png")}/></a></li>
            </ul>
          </div>

            <img src={logo} className="Profile-logo" alt="logo" />
            <h2>Poma</h2>

        </div>
        <p className="Profile-intro">
          To get started, edit <code>src/Profile.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Profile;
