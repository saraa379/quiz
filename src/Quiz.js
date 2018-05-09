import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
			super(props);
	}

	render() {
		const visible = this.props.visibility;
		const clickBtn = this.props.quizTypeClick;
		if (visible == false) {
      return <div className="invincible">
            </div>
    }
		return (
				<div className="WrapComp">
						<h2>Please choose a quiz category</h2>
						<div className="quizType">
									<button onClick={() => clickBtn("Solarsystem")}>Solar system</button>
									<button onClick={() => clickBtn("Starsplanets")}>Stars and planets</button>
									<button onClick={() => clickBtn("Earth")}>Earth</button>
									<button onClick={() => clickBtn("Mixed")}>Mixed</button>
						</div>
				</div>
		);
	  } //end of render
} //end of component

export default Quiz;
