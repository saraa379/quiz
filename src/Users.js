import React, { Component } from 'react';
import './Highscore.css';

class Users extends Component {
	constructor(props) {
			super(props);
	}

	render() {

			const usersArray = (this.props.users).reverse();

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
