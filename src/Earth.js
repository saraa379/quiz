import React, { Component } from 'react';
import './Earth.css';

class Earth extends Component {
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
						Earth component
				</div>
		);
	} //end of render
} //end of component

export default Earth;
