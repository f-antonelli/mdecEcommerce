import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcFwSBmF7Jp8CE5aozK5ML-MGWBU4uugA",
  authDomain: "mdececommerce-edb02.firebaseapp.com",
  projectId: "mdececommerce-edb02",
  storageBucket: "mdececommerce-edb02.appspot.com",
  messagingSenderId: "906217916994",
  appId: "1:906217916994:web:6abbf1d4bed2d1d5117bdb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;