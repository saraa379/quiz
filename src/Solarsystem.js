import React, { Component } from 'react';
import './Solarsystem.css';
import firebase from 'firebase';
import fire from './fire';
import QuizPage from './QuizPage.js';

class Solarsystem extends Component {
	constructor(props) {
			super(props);
			this.state = {currentPage: 1, randomNumbers: [], score: 0,
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
	}

	componentDidMount() {
		//generates random numbers
		var tempArray = [];
		for (var i = 0; i < 6; i++) {
			var randomNr = 0;
			while(this.state.randomNumbers.includes(randomNr)){
					var randomNr = Math.floor((Math.random() * 10) + 1);
			}
			this.state.randomNumbers.push(randomNr);
		}
		this.state.randomNumbers.shift();
		console.log("Random numbers from state: " + this.state.randomNumbers);
		var that = this;
		//Retrieving first question
		var ind1 = this.state.randomNumbers[0];
		fire.database().ref('Solarsystem/' + ind1).once('value', function(snapshot) {
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

					//console.log("Question 1 inside: " + that.state.quiz1.question);
					//console.log("answer 1 inside: " + that.state.quiz1.answer1);
					//console.log("answer 2 inside: " + that.state.quiz1.answer2);
					//console.log("answer 3 inside: " + that.state.quiz1.answer3);
					//console.log(" Right answer is: " + that.state.quiz1.right);

		});//end of fire
		//Retrieving second question
		var ind2 = this.state.randomNumbers[1];
		fire.database().ref('Solarsystem/' + ind2).once('value', function(snapshot) {
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
		fire.database().ref('Solarsystem/' + ind3).once('value', function(snapshot) {
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
		fire.database().ref('Solarsystem/' + ind4).once('value', function(snapshot) {
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
		fire.database().ref('Solarsystem/' + ind5).once('value', function(snapshot) {
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
					console.log("Question 5 inside: " + that.state.quiz5.question);
					console.log("answer 1 inside: " + that.state.quiz5.answer1);
					console.log("answer 2 inside: " + that.state.quiz5.answer2);
					console.log("answer 3 inside: " + that.state.quiz5.answer3);
					console.log(" Right answer is: " + that.state.quiz5.right);
		});//end of fire
		/*
		var ind;
		for (ind = 0; ind < this.state.randomNumbers.length; ind++) {
		    console.log("Random numbers from state: " + this.state.randomNumbers[ind]);

				var index = this.state.randomNumbers[ind];
				fire.database().ref('Solarsystem/' + index).once('value', function(snapshot) {
							let data = snapshot.val();
							//that.setState({q: data.question});

				})//end of db.ref
				//console.log("Question outside: " + this.state.q);
				//console.log("Answer1: " + this.state.q1.choice1.answer);
				//console.log("Answer1corr: " + this.state.q1.choice1.correctness);
		}*///end of for

  } //end of didmount
//quiz page button is clicked
	quizClicked(option){
			console.log("clicked option: " + option);
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
			//current page is incremented by 1
			var tempCurrentPage = this.state.currentPage;
			tempCurrentPage = tempCurrentPage + 1;
			this.setState({currentPage: tempCurrentPage});

	}

	render() {
		//Retrieving questions from database

				const visible = this.props.visibility;
				if (visible == false) {
					return <div className="invincible">
								</div>
				}
				if (this.state.currentPage == 2) {
					return <div className="quizWrap"> Page 2
								</div>
				} else if(this.state.currentPage == 3) {
					return <div className="quizWrap"> Page 3
								</div>
				} else if(this.state.currentPage == 4) {
					return <div className="quizWrap"> Page 4
								</div>
				} else if(this.state.currentPage == 5) {
					return <div className="quizWrap"> Page 5
								</div>
				} else if(this.state.currentPage == 6) {
					return <div className="quizWrap"> Result
								</div>
				}
				return (
						<QuizPage quizType="Solar system" page="1"
											score={this.state.score}
											quiz={this.state.quiz1}
											callbackQuiz={this.quizClicked}
											/>
				); //end of return
	} //end of render
} //end of component

export default Solarsystem;
