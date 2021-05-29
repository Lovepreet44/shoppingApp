import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBgI3Y98tx63gY1JynbWQAUSCNPngVz49k",
  authDomain: "ecommerce-34974.firebaseapp.com",
  projectId: "ecommerce-34974",
  storageBucket: "ecommerce-34974.appspot.com",
  messagingSenderId: "655807948913",
  appId: "1:655807948913:web:d61283f5bd92c5e90653d0",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
