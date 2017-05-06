import React, { Component } from 'react';
import Logo from '../../img/logo.svg';
import Upload from '../../img/upload.svg';
import Pomalogo from '../../img/poma_logo.svg';
import Profile from '../../img/profile.svg';
import Default1 from '../../img/default.jpg';
import Painting from '../../img/painting.jpg';
import ProfilePicture from '../../img/flash.png';
import Info from './Info';

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
      <div className="artwork">
          <img className="main-picture" src={Default1} />
          <Info header='Beautiful Dog' description='A cute pup!' artist='Iris Scott' />
      </div>
    );
  }
}
export default Artwork;
