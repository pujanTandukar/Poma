import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Viewframe from '../components/Viewframe';
import ViewframeData from '../data/viewframes.json';

class Feed extends Component {
  render() {
    return (
      <div className="feed-container">
        <div className="feed">
          <NavBar>
            {ViewframeData.map((viewframe, i) => {
              return <Viewframe title={viewframe.title} description={viewframe.description} artist={this.props.artist}/>
            })}
          </NavBar>
        </div>
      </div>
    );
  }
}
export default Feed;
