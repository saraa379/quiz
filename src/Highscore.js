import React, { Component } from 'react';
import './Highscore.css';
import fire from './fire';
import Users from './Users.js';

class Highscore extends Component {
	constructor(props) {
			super(props);
			this.state = { users:[] };//end of state
	} //end of constructor

	componentDidMount() {
		//Retrieving all users from database
		var that = this;
		fire.database().ref('users/').orderByChild('highScore').on('value', function(snapshot) {
			var dataArray = [];
			snapshot.forEach( child => {

				var userTemp = child.val();
				dataArray.push(userTemp);
			})//end of foreach
			that.setState({
	      	users: dataArray
	    });
		});//end of fire
  } //end of didmount

		render() {
			var usersArray = this.state.users;
			console.log("HS component render");

			const visible = this.props.visibility;
			if (visible == false) {
	      return <div className="invincible">
	            </div>
	    }
			return (
					<div>
							<h2>Highest scores</h2>
							<Users users={this.state.users}/>
					</div>
			); //end of return
		} //end of render
} //end of component

export default Highscore;
