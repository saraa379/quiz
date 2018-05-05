import React, { Component } from 'react';
import './LoggedOut.css';

class LoggedOut extends Component {
	constructor(props) {
				super(props);
	  }

	  render() {
			const visible = this.props.visibility;
			if (visible == true) {
	      return <div id="WrapLoggedOut" className="invincible">
	            </div>
	    }
			return (
					<div id="WrapLoggedOut">
							<header>
									<h1>Most important heading here</h1>
									<p>Some additional information here</p>
							</header>
					</div>
			);
	  } //end of render
} //end of component

export default LoggedOut;
