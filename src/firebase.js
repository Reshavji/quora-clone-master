import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCuHrtSAPLC6CQeuv9WkaWcjksWFWly6TY",
  authDomain: "meetup-5ffb3.firebaseapp.com",
  databaseURL: "https://meetup-5ffb3-default-rtdb.firebaseio.com",
  projectId: "meetup-5ffb3",
  storageBucket: "meetup-5ffb3.appspot.com",
  messagingSenderId: "180793006827",
  appId: "1:180793006827:web:7665f36e7487bcf42e3cae"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
