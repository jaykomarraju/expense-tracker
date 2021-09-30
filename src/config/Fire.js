import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBLCRvst9WB7tnQBoU62kdLYryR49VlZOY",
    authDomain: "expense-7863a.firebaseapp.com",
    projectId: "expense-7863a",
    storageBucket: "expense-7863a.appspot.com",
    messagingSenderId: "148049113609",
    appId: "1:148049113609:web:b67c09c336f028abb67ed8",
    measurementId: "G-TSR5W6DQMM"
}

const fire = firebase.initializeApp(config);

export default fire;