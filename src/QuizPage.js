import React, { Component } from 'react';
import './QuizPage.css';

class QuizPage extends Component {
	constructor(props) {
			super(props);
			this.state = {selectedOption: "1"};//end of states
			this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(changeEvent) {
		  this.setState({
		    selectedOption: changeEvent.target.value
		  });
	}

	render() {
		var quiz = this.props.quiz;
		const btnClick = this.props.callbackQuiz;
		//this.setState({correctAnswer: quiz.right});
		return (
				<div className="quizWrap">
						<h2>Quiz: {this.props.quizType}</h2>
						<div className="progress">
								<div className={(this.props.page=="1") ? "chosenProgress" : "nonChosenProgress"}></div>
								<div className={(this.props.page=="2") ? "chosenProgress" : "nonChosenProgress"}></div>
								<div className={(this.props.page=="3") ? "chosenProgress" : "nonChosenProgress"}></div>
								<div className={(this.props.page=="4") ? "chosenProgress" : "nonChosenProgress"}></div>
								<div className={(this.props.page=="5") ? "chosenProgress" : "nonChosenProgress"}></div>
						</div>
						<p>Your score: {this.props.score}</p>
						<h3>Question {this.props.page}</h3>
						<p className="question">{quiz.question}</p>
						<div className="radio">
								<label>
									<input type="radio" value="1" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange}/>
									{quiz.answer1}
								</label>
								<label>
									<input type="radio" value="2" checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange}/>
									{quiz.answer2}
								</label>
								<label>
									<input type="radio" value="3" checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange}/>
									{quiz.answer3}
								</label>
						</div>

						<button className="btnQuiz" onClick={() => btnClick(this.state.selectedOption)}>{(this.props.page=="5") ? "Submit" : "Next"}</button>

				</div>
		); //end of return

	} //end of render
} //end of component

export default QuizPage;
