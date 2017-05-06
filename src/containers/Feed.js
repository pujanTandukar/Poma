import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Viewframe from '../components/Viewframe';

class Feed extends Component {
  render() {
    return (
      <div className="feed-container">
        <div className="feed">
          <NavBar>
            <Viewframe />
            <Viewframe />
            <Viewframe />
            <Viewframe />
            <Viewframe />
            <Viewframe />
            <Viewframe />
          </NavBar>
        </div>
      </div>
    );
  }
}
export default Feed;
