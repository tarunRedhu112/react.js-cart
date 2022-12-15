import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./Components/App";
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDbJbVZuUSHZK_2--6MTXRW4axRiAR8joA",
  authDomain: "cart-75c93.firebaseapp.com",
  projectId: "cart-75c93",
  storageBucket: "cart-75c93.appspot.com",
  messagingSenderId: "163251411836",
  appId: "1:163251411836:web:c3d08e455f08e3988662f9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
