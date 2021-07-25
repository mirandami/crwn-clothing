import firebase from "firebase/app";  //We do not need the whole firebase utility library which is too big, we just need the app part in it
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAK64c2eVuhVaOK1oxVURp0z5llvD3o3Qc",
    authDomain: "crwn-db-9930a.firebaseapp.com",
    projectId: "crwn-db-9930a",
    storageBucket: "crwn-db-9930a.appspot.com",
    messagingSenderId: "25178265239",
    appId: "1:25178265239:web:996a8d1582596f54697bd2",
    measurementId: "G-4MFR5FDJBC"
};

firebase.initializeApp(config);

//below is all about google authentication function:

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase
