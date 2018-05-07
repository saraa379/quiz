import React, { Component } from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import './App.css';
import * as firebase from 'firebase';
import fire from './fire';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loginStatus: false};
    this.loginClick = this.loginClick.bind(this);
    this.setLoggedInStatus = this.setLoggedInStatus.bind(this);
  }

  setLoggedInStatus(){
     this.setState({loginStatus: true});
  }

  loginClick() {
    console.log('Login button is clicked');
    var provider = new firebase.auth.GoogleAuthProvider();

        //To sign in with a pop-up window, call signInWithPopup
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        console.log('Token: ' + token);
        // The signed-in user info.
        var user = result.user;
        console.log('User info: ' + user);
        return user;
        //this.setLoggedInStatus();
        //this.setState({loginStatus: true});

      }).then((user) => {
     this.setState({loginStatus: true});
  }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log('sign in is uncessful: ' + errorMessage);
        var errorMsg = document.getElementById('errorMsg');
        errorMsg.innerText = 'Sign in is unsuccessful. Please try again.';
      });//end of signInWithPopup function
  }
  componentDidMount() {

        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

              console.log('onAuthStateChanged: user is signed in', user);
              this.setState({loginStatus: true});
              //this.setLoggedInStatus();
          } else {
            // User is signed out.
            // ...
              console.log('onAuthStateChanged: user is signed out');
      }
    }).bind(this); //end of firebase auth

  }//end of componentDidMount
  render() {
    return (
      <div className="AppWrap" onClick={this.loginClick}>
          <LoggedOut visibility={this.state.loginStatus} onClick={this.loginClick}/>
          <LoggedIn visibility={this.state.loginStatus}/>
     </div> //end of AppWrap
    );
  }
}

export default App;
