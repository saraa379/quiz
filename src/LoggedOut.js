import React, { Component } from 'react';
import './LoggedOut.css';

class LoggedOut extends Component {
	constructor(props) {
				super(props);
	  }

	  render() {
			 const visible = this.props.visibility;
			 const funcClick = this.props.callbackLogin;
			if (visible == true) {
	      return <div className="invincible">
	            </div>
	    }
			return (
					<div id="WrapLoggedOut">
							<header>
									<h1>WELCOME TO THE ASTRONOMY QUIZ</h1>
									<p>Interested to test your knowledge about space?</p>
									<button onClick={() => funcClick()}>Log in via Google</button>
							</header>
					</div>
			);
	  } //end of render
} //end of component

export default LoggedOut;
