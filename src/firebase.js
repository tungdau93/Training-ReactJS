import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDyCwxOmrur5hog0XVVwqIkyzdGhH8h4w",
    authDomain: "fir-upload-d710f.firebaseapp.com",
    projectId: "fir-upload-d710f",
    storageBucket: "fir-upload-d710f.appspot.com",
    messagingSenderId: "230877422747",
    appId: "1:230877422747:web:8e36d237d55b89ca5f923e",
    measurementId: "G-Q111WB6C29"
  };    

  export const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
