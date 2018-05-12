import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
	constructor(props) {
			super(props);
			this.state = {
					user: {
							name: "",
							email: "",
							photo: "",
							key: "",
							highScore: 0
					}};
	}//end of constructor

	componentWillReceiveProps(newProps){
		this.setState({
			user: {
					name: newProps.user.generatedName,
					email: newProps.user.email,
					photo: newProps.user.photoUrl,
					key: newProps.user.key,
					highScore: newProps.user.highestScore
			}
		});//end of setState
	}//end of will recieve props

	render() {
		const visible = this.props.visibility;
		if (visible == false) {
			return <div className="invincible">
						</div>
		}
		return (
				<div className="wrapProfile">
						<img id="profilePic" src={this.state.user.photo} alt="User"></img>
						<div className="editDiv">
								<p className="name">Display name: {this.state.user.name}</p>
								<div className="edit"><i className="far fa-edit"></i></div>
						</div>
						<p className="score">Highest score: {this.state.user.highScore}</p>
				</div>
		);
	} //end of render
} //end of component

export default Profile;
