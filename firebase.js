import firebase, { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCMumI5Nv1D9etaxqcKIhiAbcoZFNyogY",
  authDomain: "yanmoenaing-dev.firebaseapp.com",
  projectId: "yanmoenaing-dev",
  storageBucket: "yanmoenaing-dev.appspot.com",
  messagingSenderId: "486000610089",
  appId: "1:486000610089:web:82de88f93b8317a2888538",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
