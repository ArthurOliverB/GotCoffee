import firebase from 'firebase/app';

import "firebase/firestore";

var config = {
		projectId: "got-coffee",
    databaseURL: "https://got-coffee.firebaseio.com/",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}


// Get a reference to the database service
export default firebase.firestore();
