import React, { Component } from 'react';
import './Mixed.css';

class Mixed extends Component {
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
						Mixed component
				</div>
		);
	} //end of render
} //end of component

export default Mixed;
