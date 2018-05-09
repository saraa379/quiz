import React, { Component } from 'react';
import './LoggedIn.css';
import Menu from './Menu.js';
import Quiz from './Quiz.js';
import Highscore from './Highscore.js';
import Profile from './Profile.js';
import Solarsystem from './Solarsystem.js';
import Starsplanets from './Starsplanets.js';
import Earth from './Earth.js';
import Mixed from './Mixed.js';

class LoggedIn extends Component {
	constructor(props) {
			super(props);
			this.state = {currentTab: "Quiz", currentContent: "Quiz"};
			this.tabClick = this.tabClick.bind(this);
			this.quizTypeClick = this.quizTypeClick.bind(this);
	}

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    this.setState({currentTab: ind});
		this.setState({currentContent: ind});
  }
	quizTypeClick(chosenType) {
		this.setState({currentContent: chosenType});
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
											<Quiz visibility={(this.state.currentContent=="Quiz") ? true : false} quizTypeClick={this.quizTypeClick}></Quiz>
											<Highscore visibility={(this.state.currentContent=="High score") ? true : false}></Highscore>
											<Profile visibility={(this.state.currentContent=="Profile") ? true : false}></Profile>
											<Solarsystem visibility={(this.state.currentContent=="Solarsystem") ? true : false}></Solarsystem>
											<Starsplanets visibility={(this.state.currentContent=="Starsplanets") ? true : false}></Starsplanets>
											<Earth visibility={(this.state.currentContent=="Earth") ? true : false}></Earth>
											<Mixed visibility={(this.state.currentContent=="Mixed") ? true : false}></Mixed>
								</div>
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
