import React, { Component } from 'react';

class Ranking extends Component {
  render() {
    const dots = [1, 2, 3];

    const height = 20;
    const width = 100;

    var rankingDotStyle = "ranking-dot-unlit";

    var self = this;

    return (
      <div className="ranking">
        {dots.map((dot, i) => {
          if(dots.length - i <= self.props.ranking) {
            rankingDotStyle = "ranking-dot-lit";
          } else {
            rankingDotStyle = "ranking-dot-unlit";
          }

          return <svg className={rankingDotStyle} height={height} width={width}>
              <circle cx="50" cy="10" r="4" stroke="none" strokeWidth="0"/>
          </svg>;
        })}

      </div>
    );
  }
}
export default Ranking;
