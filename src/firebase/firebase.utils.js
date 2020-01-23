import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyDmGIs-lFeAbjd_zbYjWydFhKW-neIa7js",
  authDomain: "be-welcome.firebaseapp.com",
  databaseURL: "https://be-welcome.firebaseio.com",
  projectId: "be-welcome",
  storageBucket: "be-welcome.appspot.com",
  messagingSenderId: "601633494345",
  appId: "1:601633494345:web:e575764d4da6d7e253b698",
  measurementId: "G-SWD0KTDMDW"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({'propmt': 'select_account)'}) // 1

export const signInWithGoogle = () => auth.signInWithPopup(provider) // 2

export default firebase


// - 1 - always trigger the google popup whenever we use this GoogleAuthProvider for authentication and signIn

// - 2 - porque signInWithPopup pega a instancia provider e usa para vários tipos de popups com twitter face e só queremos o google


// firebase.auth().signInWithPopup(provider).then(result => {
//   const token = result.credential.accessToken
//   const user = result.user
// }).catch(error => {
//   const errorCode = error.code
// })