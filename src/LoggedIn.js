import React, { Component } from 'react';
import './LoggedIn.css';
import Menu from './Menu.js';

class LoggedIn extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Quiz"};
	}

	render() {
				const visible = this.props.visibility;
				if (visible == false) {
					return <div className="invincible">
								</div>
				}
				return (
						<div id="WrapLoggedIn">
								<header>
										<Menu chosenTab={this.state.currentTab}></Menu>
										<div>User info</div>
								</header>
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
