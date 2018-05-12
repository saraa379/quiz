import React, { Component } from 'react';
import fire from './fire';
import QuizPage from './QuizPage.js';
import './QuizPage.css';

class Mixed extends Component {
	constructor(props) {
			super(props);
			this.state = {currentPage: 1, randomNumbers: [], score: 0,
				prevScore: 0,
				userKey: "",
				quiz1: {
					question: "",
					answer1: "",
					answer2: "",
					answer3: "",
					right: 0
			},
				quiz2: {
					question: "",
					answer1: "",
					answer2: "",
					answer3: "",
					right: 0
			 },
			 quiz3: {
				 question: "",
				 answer1: "",
				 answer2: "",
				 answer3: "",
				 right: 0
			 },
			 quiz4: {
				 question: "",
				 answer1: "",
				 answer2: "",
				 answer3: "",
				 right: 0
			 },
			 quiz5: {
				 question: "",
				 answer1: "",
				 answer2: "",
				 answer3: "",
				 right: 0
			 }
		}; //end of states
		this.quizClicked = this.quizClicked.bind(this);
	}//end of constructor

	componentDidMount() {
		//generates random numbers
		for (var i = 0; i < 6; i++) {
			var randomNr = 0;
			while(this.state.randomNumbers.includes(randomNr)){
					var randomNr = Math.floor((Math.random() * 15) + 1);
			}
			this.state.randomNumbers.push(randomNr);
		}
		this.state.randomNumbers.shift();
		//console.log("Random numbers from state: " + this.state.randomNumbers);
		var that = this;
		//Retrieving first question
		var ind1 = this.state.randomNumbers[0];
		fire.database().ref('Mixed/' + ind1).once('value', function(snapshot) {
					var data1 = snapshot.val();
					that.setState({
						quiz1: {
							question: data1.question,
							answer1: data1.answer1,
							answer2: data1.answer2,
							answer3: data1.answer3,
							right: data1.right
						}
					});

		});//end of fire
		//Retrieving second question
		var ind2 = this.state.randomNumbers[1];
		fire.database().ref('Mixed/' + ind2).once('value', function(snapshot) {
					var data2 = snapshot.val();
					that.setState({
						quiz2: {
							question: data2.question,
							answer1: data2.answer1,
							answer2: data2.answer2,
							answer3: data2.answer3,
							right: data2.right
						}
					});//end of setState

		});//end of fire
		//Retrieving third question
		var ind3 = this.state.randomNumbers[2];
		fire.database().ref('Mixed/' + ind3).once('value', function(snapshot) {
					var data3 = snapshot.val();
					that.setState({
						quiz3: {
							question: data3.question,
							answer1: data3.answer1,
							answer2: data3.answer2,
							answer3: data3.answer3,
							right: data3.right
						}
					});//end of setState
		});//end of fire
		//Retrieving fourth question
		var ind4 = this.state.randomNumbers[3];
		fire.database().ref('Mixed/' + ind4).once('value', function(snapshot) {
					var data4 = snapshot.val();
					that.setState({
						quiz4: {
							question: data4.question,
							answer1: data4.answer1,
							answer2: data4.answer2,
							answer3: data4.answer3,
							right: data4.right
						}
					});//end of setState
		});//end of fire
		//Retrieving fifth question
		var ind5 = this.state.randomNumbers[4];
		fire.database().ref('Mixed/' + ind5).once('value', function(snapshot) {
					var data5 = snapshot.val();
					that.setState({
						quiz5: {
							question: data5.question,
							answer1: data5.answer1,
							answer2: data5.answer2,
							answer3: data5.answer3,
							right: data5.right
						}
					});//end of setState
		});//end of fire

	} //end of didmount

	componentWillReceiveProps(newProps){
				this.setState({prevScore: newProps.user.highestScore});//end of setState
				this.setState({userKey: newProps.user.key});
	}//end of will recieve props

	//quiz page button is clicked
		quizClicked(option){
				//console.log("clicked option: " + option);
				//console.log("current page " + this.state.currentPage);
				//findout current quiz based on current Page
				var currentQuiz = {};
				if(this.state.currentPage == 1){
						currentQuiz = this.state.quiz1;
				} else if (this.state.currentPage == 2){
						currentQuiz = this.state.quiz2;
				} else if (this.state.currentPage == 3){
						currentQuiz = this.state.quiz3;
				} else if (this.state.currentPage == 4){
						currentQuiz = this.state.quiz4;
				} else if (this.state.currentPage == 5){
						currentQuiz = this.state.quiz5;
				}
				//console.log("Current quiz: " + currentQuiz.question);
				//compare option with current quiz answer
				var optionNr = parseInt(option);
				//update score
				if(optionNr == currentQuiz.right){
					var tempScore = this.state.score;
					tempScore = tempScore + 5
					this.setState({score: tempScore});
				}

				//checks if new score is more that prev prevScore
				if (this.state.currentPage == 5){
						//console.log("New score " + this.state.score);
						//console.log("old score " + this.state.prevScore);
						//console.log("user key " + this.state.userKey);
						if(this.state.prevScore < this.state.score){
								//updates current users highestScore in db
							fire.database().ref('users/' + this.state.userKey + '/highScore').set(this.state.score);
						}
				}
				//console.log("Solar system comp user previous score: " + this.props.user.highestScore);
				//current page is incremented by 1
				var tempCurrentPage = this.state.currentPage;
				tempCurrentPage = tempCurrentPage + 1;
				this.setState({currentPage: tempCurrentPage});

		}//end of quizClick

	render() {
		const visible = this.props.visibility;
		if (visible == false) {
			return <div className="invincible">
						</div>
		}
		if (this.state.currentPage == 2) {
			return <QuizPage quizType="Mixed" page="2"
								score={this.state.score}
								quiz={this.state.quiz2}
								callbackQuiz={this.quizClicked}
								/>
		} else if(this.state.currentPage == 3) {
			return <QuizPage quizType="Mixed" page="3"
								score={this.state.score}
								quiz={this.state.quiz3}
								callbackQuiz={this.quizClicked}
								/>
		} else if(this.state.currentPage == 4) {
			return <QuizPage quizType="Mixed" page="4"
								score={this.state.score}
								quiz={this.state.quiz4}
								callbackQuiz={this.quizClicked}
								/>
		} else if(this.state.currentPage == 5) {
			return <QuizPage quizType="Mixed" page="5"
								score={this.state.score}
								quiz={this.state.quiz5}
								callbackQuiz={this.quizClicked}
								/>
		} else if(this.state.currentPage == 6) {
			var feedback = "";
					if (this.state.score >= 15){
							feedback = "Brilliant! What are you doing here? NASA needs you.";
					} else if (this.state.score < 15 && this.state.score > 5) {
							feedback = "Good job!";
					} else {
							feedback = "Almost there! Just read a little more science-fiction.";
					}
			return <div className="quizWrap">
									<h3>{feedback}</h3>
									<p>Your score: {this.state.score} out of 25</p>
						</div>
		}
		return (
				<QuizPage quizType="Mixed" page="1"
									score={this.state.score}
									quiz={this.state.quiz1}
									callbackQuiz={this.quizClicked}
									/>
		); //end of return
	} //end of render
} //end of component

export default Mixed;
