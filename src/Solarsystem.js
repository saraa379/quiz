import React, { Component } from 'react';
import './Solarsystem.css';

class Solarsystem extends Component {
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
						Solar system component
				</div>
		);
	} //end of render
} //end of component

export default Solarsystem;
