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
const auth = firebase.auth()
const firestore = firebase.firestore()

// auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'propmt': 'select_account)'}) // 1
const signInWithGoogle = () => auth.signInWithPopup(provider) // 2
const userSignOut = () => auth.signOut()


//firestore
const addUserToDatabase = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapShot = await userRef.get()

  if(!userSnapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
      
    } catch(error) {
      console.log('Error creating user. ', error.message)
    }
  }

return userRef
}



export {
    auth,
    firestore,
    signInWithGoogle,
    userSignOut,
    addUserToDatabase
}

export default firebase


// - 1 - always trigger the google popup whenever we use this GoogleAuthProvider for authentication and signIn

// - 2 - porque signInWithPopup pega a instancia provider e usa para vários tipos de popups com twitter face e só queremos o google


// firebase.auth().signInWithPopup(provider).then(result => {
//   const token = result.credential.accessToken
//   const user = result.user
// }).catch(error => {
//   const errorCode = error.code
// })