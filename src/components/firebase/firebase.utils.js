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

//the below function is used to check if the anthenticated sign in user is already store in the database(firebase) or not
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // console.log(firestore.doc(`users/skdnsnlkgsk`));
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // const collectionSnapshot = await collectionRef.get();
    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();  //we want to get the document at an empty string, give me a new document reference in this collection and randomly generate id for me
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
};


//below is all about google authentication function:

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
