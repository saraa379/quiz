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
    var that = this; //otherwise this doesn't work inside auth

        //To sign in with a pop-up window, call signInWithPopup
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = result.credential.accessToken;
        //console.log('Token: ' + token);
        // The signed-in user info.
        var user = result.user;
        //console.log('User info: ' + user);
        return user;
        //this.setLoggedInStatus();
        //this.setState({loginStatus: true});

      }).then((user) => {
          this.setState({loginStatus: true});
          var name = user.displayName;
        	var email = user.email;
        	var photoUrl = user.photoURL;
          //console.log("Logged in user: " + name);
	        //console.log("Logged in user email: " + user.email);
          //console.log("Photourl: " + photoUrl);
          //check logged in user exist in db

          //Checks if user already exist in the DB
    			fire.database().ref('users/').once('value', function(snapshot) {
    				let data = snapshot.val();
            var userExist = false;
    				for(let child in data){
    					let r = data[child];
    					//console.log("remail: " + r.email);
    					//console.log("userO.email: " + userO.email);
    					if(r.email == user.email){
                //if user exists in db, save r as current user
    						//console.log("User exist");
                //this.state.curUser.generatedName = name;
                //console.log(this.state.curUser.generatedName);
                userExist = true;
              //saving old user obj into state
                //this.setState({loginStatus: true});
                that.setState({
                  curUser: {
                    generatedName: r.name,
                    email: r.email,
                    photoUrl: r.photoUrl,
                    key: r.key,
                    highestScore: r.highScore
                  }
                });

    					} //end of if

    				}//end of for
                  if(userExist == false){
                      //For the new user
                      /* Retrives highestScore from Firebase Database */
                     let uid = fire.database().ref('latestUserID');
                     uid.once('value', snapshot => {
                     let curUID = snapshot.val() + 1;
                     console.log("UID from db " + curUID);
                     //updating latestUserID in db
                     firebase.database().ref('latestUserID').set(curUID);
                     var generName = "User" + curUID;
                     //creates new user object in db
                     const newUser = {
                        name: generName,
                        email: email,
                        uid: curUID,
                        highScore: 0,
                        key: "",
                        photoUrl: photoUrl
                      }//end of obj
                    //Adding newuser into db
                    var userKey = fire.database().ref('users/').push(newUser).key;
                    //console.log("User key " + userKey);
                    firebase.database().ref('users/' + userKey + '/key').set(userKey);
                    newUser.key = userKey;
                    //saving old user obj into state
                    that.setState({
                      curUser: {
                        generatedName: newUser.name,
                        email: newUser.email,
                        photoUrl: newUser.photoUrl,
                        key: newUser.key,
                        highestScore: newUser.highScore
                      }
                    });//end of setState
                  })   //end of ref
              } //end of if
    			})

  }).catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log('sign in is uncessful: ' + errorMessage);
      });//catch
  } //end of loginClick

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

  render() {
    console.log("Rendering user in app: " + this.state.curUser.generatedName);
    return (
      <div className="AppWrap">
          <LoggedOut visibility={this.state.loginStatus} callbackLogin={this.loginClick}/>
          <LoggedIn visibility={this.state.loginStatus} logUser={this.state.curUser} callbackLogOut={this.logOutClick}/>
     </div> //end of AppWrap
    );
  }
}

export default App;
