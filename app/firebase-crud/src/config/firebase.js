import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDe79ZPzivZ5cThVzL9VBkvaiBixZKLelc",
	authDomain: "crud-devleonel.firebaseapp.com",
	projectId: "crud-devleonel",
	storageBucket: "crud-devleonel.appspot.com",
	messagingSenderId: "509689578623",
	appId: "1:509689578623:web:606302cc185e2df559eb4a",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
