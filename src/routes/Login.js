import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../css/Login.css'
import { NETFLIX_APP_LOGGEDIN } from "../utils/helpers";

const Login = (props) => {


const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    
    signInSuccessWithAuthResult: () => {
        console.log('logged-in')
        localStorage.setItem(NETFLIX_APP_LOGGEDIN, true)
        return true
    },
  },
};
    
    
    
    
    return (
        <div className="login">

               <h1>Please sign-in:</h1>
    
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    )

}

export { Login }