import React, { Component } from 'react';
import Artwork from './Artwork';
import ActionBar from './ActionBar';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class Viewframe extends Component {
  render() {
    return (
      <div className="viewframe-container">
        <div className="viewframe">
            <Artwork title={this.props.title} description={this.props.description} artist={this.props.artist}/>
            <ActionBar />
        </div>
      </div>
    );
  }
}
export default Viewframe;
