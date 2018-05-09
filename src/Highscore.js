import React, { Component } from 'react';
import './Highscore.css';

class Highscore extends Component {
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
							Highscore component
					</div>
			); //end of return
		} //end of render
} //end of component

export default Highscore;
