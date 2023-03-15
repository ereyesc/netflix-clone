import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCn0ymPc1ARZT4yoCszlHMHHzotHRrrmA0",
    authDomain: "netflix-clone-6e04e.firebaseapp.com",
    projectId: "netflix-clone-6e04e",
    storageBucket: "netflix-clone-6e04e.appspot.com",
    messagingSenderId: "256304014450",
    appId: "1:256304014450:web:01382abffc40f08fb1ceeb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db