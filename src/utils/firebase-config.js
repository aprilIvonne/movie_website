
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6YkvU4Dl2wCVn-lk5FHT07uDF-flA0K4",
  authDomain: "netflix-project-3539f.firebaseapp.com",
  projectId: "netflix-project-3539f",
  storageBucket: "netflix-project-3539f.appspot.com",
  messagingSenderId: "478742997057",
  appId: "1:478742997057:web:847febed4eaa0dd746bec0",
  measurementId: "G-FS0PHC046B"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)