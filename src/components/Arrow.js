import React, { Component } from 'react';

class Arrow extends Component {
  render() {

    const height = 40;
    const width = 100;

    var arrowStyle;

    if(this.props.lit == true) {
      arrowStyle = "arrow-lit";
    } else {
      arrowStyle = "arrow-unlit";
    }

    var arrow;
    var type;

    if(this.props.type == "up") {
      arrow = <polygon className={arrowStyle} points="0,25 25,0 50,25" transform="translate(30,7.5) scale(0.8) rotate(0 37 36)" fill="none" />;
    } else if(this.props.type == "down"){
      arrow = <polygon className={arrowStyle} points="0,0 50,0 25,30" transform="translate(30,7.5) scale(0.8) rotate(0 37 36)" fill="none" />;
    }

    return (
      <div className="arrow-container" onMouseDown={this.props.voteHandler}>
        <svg height={height} width={width}>
          {arrow}
        </svg>
      </div>
    );
  }
}
export default Arrow;
