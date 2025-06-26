// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeS84U387b8sKeks_0em5ZnVBZSE27DR8",
  authDomain: "plannet-110c0.firebaseapp.com",
  projectId: "plannet-110c0",
  storageBucket: "plannet-110c0.firebasestorage.app",
  messagingSenderId: "492546167241",
  appId: "1:492546167241:web:1f286eb7f1e57b5d895818"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);