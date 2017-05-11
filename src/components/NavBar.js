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
        <div className="nav-bar-search-bar-container">
          <input className="nav-bar-search-bar"/>
        </div>
        <div className="nav-bar-items">
          <img className="nav-upload" src={require("../../img/upload.svg")}/>
          <img className="nav-profile" src={require("../../img/profile.svg")}/>
        </div>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default NavBar;
