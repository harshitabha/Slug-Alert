import { initializeApp } from "Firebase/app";
import { getAuth } from "Firebase/auth";
import { collection, doc, getFirestore } from "Firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyA_TbdAX0X23feSDQngHz-qAA0LYi2zszc",
    authDomain: "slugalertconnectiontester.firebaseapp.com",
    projectId: "slugalertconnectiontester",
    storageBucket: "slugalertconnectiontester.appspot.com",
    messagingSenderId: "321313704632",
    appId: "1:321313704632:web:d90758e199c4a94c90824d",
    measurementId: "G-BD46DSFNLX"
};

// Initialize our Firebase for our application
let app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const userDoc = (userId) => doc(db, "users", userId)
export {
    auth,
}