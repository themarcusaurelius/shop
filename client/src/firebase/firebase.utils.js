import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6kASRMis5abYOVOoo-j6Q-RT4RwBlKno",
    authDomain: "online-store-64ff1.firebaseapp.com",
    databaseURL: "https://online-store-64ff1.firebaseio.com",
    projectId: "online-store-64ff1",
    storageBucket: "",
    messagingSenderId: "681548788424",
    appId: "1:681548788424:web:b74716f6041fbc9f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Auth Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
