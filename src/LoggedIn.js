import React, { Component } from 'react';
import './LoggedIn.css';
import Menu from './Menu.js';
import Quiz from './Quiz.js';
import Highscore from './Highscore.js';
import Profile from './Profile.js';

class LoggedIn extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Quiz"};
			this.tabClick = this.tabClick.bind(this);
	}

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    this.setState({currentTab: ind});
  }

	render() {
				const visible = this.props.visibility;
				const funcClick = this.props.callbackLogOut;
				var user = this.props.logUser;
				console.log("LoggedIn comp recieved: " + user.generatedName);
				if (visible == false) {
					return <div className="invincible">
								</div>
				}
				return (
						<div id="WrapLoggedIn">
								<header>
										<Menu chosenTab={this.state.currentTab} clickEvent={this.tabClick}></Menu>
										<div id="logOut" onClick={() => funcClick()}><i className="fas fa-sign-out-alt"></i></div>
								</header>
								<div className="tabContent">
											<Quiz visibility={(this.state.currentTab=="Quiz") ? true : false}></Quiz>
											<Highscore visibility={(this.state.currentTab=="High score") ? true : false}></Highscore>
											<Profile visibility={(this.state.currentTab=="Profile") ? true : false}></Profile>
								</div>
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
