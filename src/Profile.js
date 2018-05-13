import React, { Component } from 'react';
import './Profile.css';
import fire from './fire';

class Profile extends Component {
	constructor(props) {
			super(props);
			this.state = {value: '', editDivVisible: false,
					user: {
							name: "",
							email: "",
							photo: "",
							key: "",
							highScore: 0
					}};
			this.handleChange = this.handleChange.bind(this);
			this.handleUpdate = this.handleUpdate.bind(this);
			this.showEditDiv = this.showEditDiv.bind(this);
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

	handleChange(event) {
			this.setState({value: event.target.value});
	}

	handleUpdate(event) {
    //saves the new name into database
		//console.log("handle update is happened: " + this.state.user.key);
		fire.database().ref('users/' + this.state.user.key + '/name').set(this.state.value);
		this.setState({value: ""});
		this.setState({editDivVisible: false});
  }
	showEditDiv(event) {
			this.setState({editDivVisible: true});
	}

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
								<div className="edit" onClick={this.showEditDiv}><i className="far fa-edit"></i></div>
						</div>
						<div id="editDiv" className={(this.state.editDivVisible) ? "visible" : "invincible"}>
								<input type="text" value={this.state.value} onChange={this.handleChange} />
								<button className="btnUpdate" onClick={this.handleUpdate}>Update</button>
						</div>
						<p className="score">Highest score: {this.state.user.highScore}</p>
				</div>
		);
	} //end of render
} //end of component

export default Profile;
