import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const db = firebase
  .initializeApp({
    apiKey: process.env.VUE_APP_FB_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSANGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
  })
  .firestore();
