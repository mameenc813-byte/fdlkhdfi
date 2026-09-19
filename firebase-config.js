/*
  PASTE YOUR FIREBASE PROJECT KEYS BELOW.
  See README.md → "Step 1: Create your free Firebase project" for exactly
  where to find these on firebase.google.com (it's free, no card needed).

  You only ever edit this ONE file — both the website and the admin page
  read from it.
*/

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Do not edit below this line.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
