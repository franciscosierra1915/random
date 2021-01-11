import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCf4WrN-yGIzoeuC1-oyxksiJ1KRMLJedw",
    authDomain: "pdf-firebase-6af4f.firebaseapp.com",
    projectId: "pdf-firebase-6af4f",
    storageBucket: "pdf-firebase-6af4f.appspot.com",
    messagingSenderId: "472019211629",
    appId: "1:472019211629:web:0f9df9594755696d4c3664"
});

const storage = firebase.storage();
const db = app.firestore();


export { app, storage, db };