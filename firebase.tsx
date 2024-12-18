import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth,  } from 'firebase/auth';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXBnx9KtTnJ8app7mSE-WWPSR6fPsk3AY",
  authDomain: "labexamm-477bf.firebaseapp.com",
  projectId: "labexamm-477bf",
  storageBucket: "labexamm-477bf.firebasestorage.app",
  messagingSenderId: "907380624907",
  appId: "1:907380624907:android:41dbe8d6265c86f0f2810e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {

});

export { app, db, auth };