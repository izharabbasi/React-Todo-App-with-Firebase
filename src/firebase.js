import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCq-HT0LNbO6iCzhTUIqKAZOm3mdhwtqpU",
    authDomain: "react-todo-app-abc0d.firebaseapp.com",
    projectId: "react-todo-app-abc0d",
    storageBucket: "react-todo-app-abc0d.appspot.com",
    messagingSenderId: "525790491007",
    appId: "1:525790491007:web:01123c67967fecb3106a4a",
    measurementId: "G-27KSR0FK9L"
});

const db = firebaseApp.firestore();

export default db;