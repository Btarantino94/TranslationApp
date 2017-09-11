import React, { Component } from 'react';
import ScoreContainer from './ScoreContainer';
import ScoreBar from './ScoreBar';
import PropTypes from 'prop-types';

class Player extends Component {
	render() {
		let score = this.props.score * this.props.units;
		score += 'px';
		return (
		<section className="player">
            <h2>{this.props.stats.name}</h2>
            <p className="score">Score: {this.props.score}</p>
            <Scorebar height={score} />
            <ScoreContainer 
            plus={this.props.handlePlusScore} 
            minus={this.props.handleMinusScore}
            />
        </section>

		);
	}
}

Player.PropTypes = {
	key: PropTypes.number.isRequired,
	stats: PropTypes.shape({
		name: PropTypes.string,
		score: PropTypes.number
	}),
	units: PropTypes.number,
	handlePlusScore: PropTypes.func,
	handleMinusScore: PropTypes.func
};
//gives specific default values for props:
Player.defaultProps = {
	units: 50
};


export default Player;