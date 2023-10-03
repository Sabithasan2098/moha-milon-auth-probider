// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7dt1zcnpL8bR3f-wgbuyFDRWbdfipRro",
  authDomain: "auth-moha-milon-80732.firebaseapp.com",
  projectId: "auth-moha-milon-80732",
  storageBucket: "auth-moha-milon-80732.appspot.com",
  messagingSenderId: "493331031914",
  appId: "1:493331031914:web:d96962d381d3889c1ba713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
