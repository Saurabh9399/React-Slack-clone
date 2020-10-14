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
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`user/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set({});
    } catch (error) {
      console.log("Error", error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection("user").doc(uid);
    return userDocument;
  } catch (error) {
    console.error("Error in getUserDocument", error.message);
  }
}
