import React, { Component } from 'react';
import LoggedIn from './LoggedIn.js';
import LoggedOut from './LoggedOut.js';
import './App.css';
import firebase from 'firebase';
import fire from './fire';
//import db from './fire';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loginStatus: false, curUser: {
					generatedName: "",
					email: "",
					photoUrl: "",
          key: "",
					highestScore: 0
				}};
    this.loginClick = this.loginClick.bind(this);
    this.logOutClick = this.logOutClick.bind(this);
  }

  loginClick() {
    //console.log('Login button is clicked');
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
          var name = user.displayName;
        	var email = user.email;
        	var photoUrl = user.photoURL;
          console.log("Logged in user: " + name);
	        console.log("Logged in user email: " + user.email);
          console.log("Photourl: " + photoUrl);
          //check logged in user exist in db

          //Checks if user already exist in the DB
    			fire.database().ref('users/').once('value', function(snapshot) {
    				let data = snapshot.val();
    				for(let child in data){
    					let r = data[child];
    					//console.log("remail: " + r.email);
    					//console.log("userO.email: " + userO.email);
    					if(r.email == user.email){
                //if user exists in db, save r as current user
    						//console.log("User exist");
                var userExist = true;
    					} //end of if else

    				}//end of for
            callLater(userExist);
    			})//end of db.ref users

          function callLater(exist){
            //if user doesn't exist in db add new user
            if(exist == false){
                //For the new user
                /* Retrives highestScore from Firebase Database */
               let uid = fire.database().ref('latestUserID');
               uid.once('value', snapshot => {
               let curUID = snapshot.val() + 1;
               console.log("UID from db " + curUID);
               //updating latestUserID in db
               firebase.database().ref('latestUserID').set(curUID);
               //creates new user object in db
               const newUser = {
                  name: name,
                  email: email,
                  uid: curUID,
                  highScore: 0,
                  key: ""
                }//end of obj
              //Adding newuser into db
              var userKey = fire.database().ref('users/').push(newUser).key;
              //console.log("User key " + userKey);
              firebase.database().ref('users/' + userKey + '/key').set(userKey);
              newUser.key = userKey;
              //console.log("New user name: " + newUser.name);
              //console.log("New user email: " + newUser.email);
              //console.log("New user id: " + newUser.uid);
              //console.log("New user key: " + newUser.key);

              //that.setState({curUser.generatedName: newUser.name});
              //return newUser;
              })   //end of messagesRef
        } //end of if
      } //end of callLater

  }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log('sign in is uncessful: ' + errorMessage);
      });//end of signInWithPopup function
  }
  logOutClick() {
      console.log('Logout button is clicked');
      firebase.auth().signOut().then(function() {
			  // Sign-out successful.
			  console.log('User is signed out');
        //this.setState({loginStatus: false});

			}).then((user) => {
        this.setState({loginStatus: false});
      }).catch(function(error) {
			  //console.log('Error sign out: ' + error);
			});

  }
  componentDidMount() {
      /*
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

              console.log('onAuthStateChanged: user is signed in', user);
              //this.setState({loginStatus: true});
              //this.setLoggedInStatus();
          } else {
            // User is signed out.
            // ...
              console.log('onAuthStateChanged: user is signed out');
      }
    }); //end of firebase auth
*/
  }//end of componentDidMount
  render() {
    return (
      <div className="AppWrap">
          <LoggedOut visibility={this.state.loginStatus} callbackLogin={this.loginClick}/>
          <LoggedIn visibility={this.state.loginStatus} callbackLogOut={this.logOutClick}/>
     </div> //end of AppWrap
    );
  }
}

export default App;
