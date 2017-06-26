import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBEsyoqvY955QsdrdbEpGIWvNNnvZ3PC0U",
    authDomain: "koty-app-login.firebaseapp.com",
    databaseURL: "https://koty-app-login.firebaseio.com",
    projectId: "koty-app-login",
    storageBucket: "",
    messagingSenderId: "364801817856"
};

firebase.initializeApp(config);

export default firebase;