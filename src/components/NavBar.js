import React, { Component } from 'react';
import logo from '../../img/poma_logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div>
      <div className="nav-bar">
        <div className="nav-bar-header">
          <img src={logo} className="logo" alt="logo" />
          <h2 className="title">Poma</h2>
        </div>
        <img className="upload-pic" src={require("../../img/upload.svg")}/>
        <img className="profile-pic" src={require("../../img/profile.svg")}/>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default NavBar;
