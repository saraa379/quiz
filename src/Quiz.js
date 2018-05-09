import React, { Component } from 'react';
import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
			super(props);
	}

	render() {
		const visible = this.props.visibility;
		if (visible == false) {
      return <div className="invincible">
            </div>
    }
		return (
				<div>
						Quiz component
				</div>
		);
	  } //end of render
} //end of component

export default Quiz;
