import firebase from "firebase"
import "firebase/firestore"

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCd_YXtz5cjEQufw5FvhX_A_bh9Rb46dS8",
  authDomain: "revents-ac203.firebaseapp.com",
  databaseURL: "https://revents-ac203.firebaseio.com",
  projectId: "revents-ac203",
  storageBucket: "revents-ac203.appspot.com",
  messagingSenderId: "1020244360798"
}
firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
