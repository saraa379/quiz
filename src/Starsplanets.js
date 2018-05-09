import React, { Component } from 'react';
import './Starsplanets.css';

class Starsplanets extends Component {
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
						Stars and planets component
				</div>
		);
	} //end of render
} //end of component

export default Starsplanets;
