import React, { Component } from 'react';
import logo from './logo.svg';
import './Viewform.css';
import upload from '../img/upload.svg';
import pomalogo from '../img/poma_logo.svg';
import profile from '../img/profile.svg';
import default1 from '../img/default.jpg';
import painting from '../img/painting.jpg';
import profilePicture from '../img/flash.png';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class ViewForm extends Component {
  render() {
    return (
      <div className="ViewForm">
          <img className="MainPicture" src={default1}/>
          <img className="MainPicture2" src={painting}/>
          <img className="MainPicture" src={default1}/>
      </div>
    );
  }
}
export default ViewForm;
