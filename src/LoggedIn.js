import React, { Component } from 'react';

class LoggedIn extends Component {
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
						<div id="WrapLoggedIn">
								Logged in component
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
