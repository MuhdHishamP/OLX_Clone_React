import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGIfQcjzOzAMwaL2hEZuYs5iSWwIyOnqM",
  authDomain: "olx-clone-87dba.firebaseapp.com",
  projectId: "olx-clone-87dba",
  storageBucket: "olx-clone-87dba.appspot.com",
  messagingSenderId: "515396944329",
  appId: "1:515396944329:web:000f7df1a493d1212f6818",
  measurementId: "G-3G2GPZ032H",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
