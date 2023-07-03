//thank god for stack overflow
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOrMynv1FFQOQkukEHyG-_7LOxIBOeQfQ",
    authDomain: "facebook-clone-514f6.firebaseapp.com",
    projectId: "facebook-clone-514f6",
    storageBucket: "facebook-clone-514f6.appspot.com",
    messagingSenderId: "1004213310811",
    appId: "1:1004213310811:web:de5bf9fe7e18efd8c4f67e",
    measurementId: "G-FKP7M00H9H"
  };

  //to connect React frontend with Firebase backend
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //to get access to Database
  const db = firebaseApp.firestore();

  //for authentication
  const auth = firebase.auth();
  
  //for the authentication provider
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider,};
  export default db;
 

   