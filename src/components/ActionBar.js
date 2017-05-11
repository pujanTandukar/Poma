import React, { Component } from 'react';
import Arrow from './Arrow';
import Ranking from './Ranking';

class ActionBar extends Component {
  constructor(props) {
  super(props);
  this.state = {
    rating: 0,
    upvote: false,
    downvote: false,
    ranking: 2
  }
    this.loadRatingFromServer = this.loadRatingFromServer.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);

  }
  upvote() {
    console.log("upvoted!!!");
    this.setState({
      upvote: true
    });
  }
  downvote() {
    this.setState({
      downvote: true
    });
  }
  loadRatingFromServer() {

  }
  componentDidMount() {
    this.loadRatingFromServer();
  }
  render() {

    return (
      <div className="action-bar-container">
        <div className="action-bar">
          <div className="actions">
            <Arrow lit={this.state.upvote} type="up" voteHandler={this.upvote}/>
            <Arrow lit={this.state.downvote} type="down" voteHandler={this.downvote}/>
            <Ranking ranking={this.state.ranking}/>
          </div>
        </div>
      </div>
    );
  }
}
export default ActionBar;
