import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import ProfilePicture from '../../img/profilePic.jpg';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="profile-pic-container">
            <img className="profile-pic" src={ProfilePicture}/>
        </div>

        <div className="label">
          <h1>{this.props.title}</h1>
          <h2>{this.props.description}</h2>
          <h3>{this.props.artist}</h3>
        </div>
      </div>
    );
  }
}
export default Info;
