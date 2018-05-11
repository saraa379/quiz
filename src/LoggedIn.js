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
			this.state = {currentTab: "Quiz", currentContent: "Quiz", menuClicked: false,
					curUser: {
							generatedName: "",
							email: "",
							photoUrl: "",
							key: "",
							highestScore: 0
					}};
			this.tabClick = this.tabClick.bind(this);
			this.quizTypeClick = this.quizTypeClick.bind(this);
	}

	componentWillReceiveProps(newProps){
				console.log("LoggedIn comp did mount");
				this.setState({
					curUser: {
							generatedName: newProps.logUser.generatedName,
							email: newProps.logUser.email,
							photoUrl: newProps.logUser.photoUrl,
							key: newProps.logUser.key,
							highestScore: newProps.logUser.highestScore
					}
				});//end of setState

	}//end of didmount

	tabClick(ind) {
    //console.log('Wrapper: Click happened: ' + ind);
    this.setState({currentTab: ind});
		this.setState({currentContent: ind});
		this.setState({menuClicked: true});

  }
	quizTypeClick(chosenType) {
		this.setState({currentContent: chosenType});
		this.setState({menuClicked: true});
  }

	render() {
				const visible = this.props.visibility;
				const funcClick = this.props.callbackLogOut;
				var tempuser = this.props.logUser;

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
											<Solarsystem user={this.state.curUser} visibility={(this.state.currentContent=="Solarsystem") ? true : false} menuClicked={this.state.menuClicked}></Solarsystem>
											<Starsplanets visibility={(this.state.currentContent=="Starsplanets") ? true : false} menuClicked={this.state.menuClicked}></Starsplanets>
											<Earth visibility={(this.state.currentContent=="Earth") ? true : false} menuClicked={this.state.menuClicked}></Earth>
											<Mixed visibility={(this.state.currentContent=="Mixed") ? true : false} menuClicked={this.state.menuClicked}></Mixed>
								</div>
						</div>
				);
	  } //end of render
} //end of component

export default LoggedIn;
