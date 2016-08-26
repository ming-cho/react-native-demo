import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyALujDmq-66tEtKo52s05pYh1w3vaYTliA",
  authDomain: "hitxiang.firebaseapp.com",
  databaseURL: "https://hitxiang.firebaseio.com",
  storageBucket: "",
};

export const firebaseApp = firebase.initializeApp(config);