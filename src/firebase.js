import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCDRaHgWCNJoou5VoD6LPduJoMxAEG3wo",
  authDomain: "slackclone-reactwebapp.firebaseapp.com",
  databaseURL: "https://slackclone-reactwebapp.firebaseio.com",
  projectId: "slackclone-reactwebapp",
  storageBucket: "slackclone-reactwebapp.appspot.com",
  messagingSenderId: "728769189595",
  appId: "1:728769189595:web:449be49daf2c68edc65efe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
