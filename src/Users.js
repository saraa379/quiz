import React, { Component } from 'react';
import './Highscore.css';

class Users extends Component {
	constructor(props) {
			super(props);
	}

	render() {

			const usersArray = (this.props.users).reverse();
			//iterating through users array in props
/*
			usersArray.map(({name, email, photoUrl, key, highScore}) => {
					console.log("User inside HS: " + name);
					console.log("User inside HS: " + email);
					console.log("User inside HS: " + photoUrl);
					console.log("User inside HS: " + key);
					console.log("User inside HS: " + highScore);
			});*///end of map
			const listItems = usersArray.map(function(user) {
					return <div className="userWrap" key={user.key}>
										<img className="pic" src={user.photoUrl} alt="user"/>
										<div className="text">
												<p className="name">{user.name}</p>
												<p>{user.highScore}</p>
										</div>
									</div>;
      });

      return (
				<div className="wrap">
						 {listItems}
				</div>
      );//end of return
	  } //end of render
} //end of component

export default Users;
