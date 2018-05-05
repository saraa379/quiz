import React, { Component } from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loginStatus: false};
  }
  render() {
    return (
      <div className="AppWrap">
          <LoggedOut visibility={this.state.loginStatus}/>
          <LoggedIn visibility={this.state.loginStatus}/>
     </div> //end of AppWrap
    );
  }
}

export default App;
