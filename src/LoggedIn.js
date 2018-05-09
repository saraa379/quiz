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
				const funcClick = this.props.callbackLogOut;
				const user = this.props.logUser;
				console.log("LoggedIn comp recieved: " + this.props.logUser.generatedName);
				if (visible == false) {
					return <div className="invincible">
								</div>
				}
				return (
						<div id="WrapLoggedIn">
								<header>
										<Menu chosenTab={this.state.currentTab}></Menu>
										<div id="logOut" onClick={() => funcClick()}><i className="fas fa-sign-out-alt"></i></div>
								</header>
								<div className="tabContent">
								</div>
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
