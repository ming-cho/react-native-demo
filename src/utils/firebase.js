import * as firebase from 'firebase'
import * as env from '../../env';

const domain = env.FIREBASE_DOMAIN;
const apiKey = env.FIREBASE_API_KEY;
const config = {
  apiKey: apiKey,
  authDomain: domain,
  databaseURL: `https://${domain}`,
  storageBucket: "",
};

export const firebaseApp = firebase.initializeApp(config);