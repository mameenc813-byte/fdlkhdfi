/*
  PASTE YOUR FIREBASE PROJECT KEYS BELOW.
  See README.md → "Step 1: Create your free Firebase project" for exactly
  where to find these on firebase.google.com (it's free, no card needed).

  You only ever edit this ONE file — both the website and the admin page
  read from it.
*/

const firebaseConfig = {
  apiKey: "AIzaSyD5OKJUQ8zJY6uAMos4Yc2gzxz_6Ykuaoo",
  authDomain: "malabar-furniture.firebaseapp.com",
  projectId: "malabar-furniture",
  storageBucket: "malabar-furniture.firebasestorage.app",
  messagingSenderId: "956337917833",
  appId: "1:956337917833:web:4d80898f3869f4e76adb58"
};

// Do not edit below this line.
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
