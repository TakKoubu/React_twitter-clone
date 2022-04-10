import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHdbnD_fUVR3CqXsuNDDkHc_yoeN9enWA",
  authDomain: "twitter-clone-48e5f.firebaseapp.com",
  projectId: "twitter-clone-48e5f",
  storageBucket: "twitter-clone-48e5f.appspot.com",
  messagingSenderId: "94133819092",
  appId: "1:94133819092:web:c6777c341cf8a1212a0d41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
