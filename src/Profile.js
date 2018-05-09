import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
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
						Profile component
				</div>
		);
	} //end of render
} //end of component

export default Profile;
