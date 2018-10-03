import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBnwPUU3DQeMWSFLhTPIC_MpYkhuZ1_2UA",
  authDomain: "slack-clone-e0054.firebaseapp.com",
  databaseURL: "https://slack-clone-e0054.firebaseio.com",
  projectId: "slack-clone-e0054",
  storageBucket: "slack-clone-e0054.appspot.com",
  messagingSenderId: "377614347143"
};
firebase.initializeApp(config);

export default firebase;
