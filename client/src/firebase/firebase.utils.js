import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyDmGIs-lFeAbjd_zbYjWydFhKW-neIa7js',
  authDomain: 'be-welcome.firebaseapp.com',
  databaseURL: 'https://be-welcome.firebaseio.com',
  projectId: 'be-welcome',
  storageBucket: 'be-welcome.appspot.com',
  messagingSenderId: '601633494345',
  appId: '1:601633494345:web:e575764d4da6d7e253b698',
  measurementId: 'G-SWD0KTDMDW',
}

firebase.initializeApp(config)
const auth = firebase.auth()
const firestore = firebase.firestore()

// auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propmt: 'select_account)' }) // 1
const signInWithGoogle = () => auth.signInWithPopup(provider) // 2
const userSignOut = () => auth.signOut()

//firestore
const addUserToDatabase = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const userSnapShot = await userRef.get()

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user. ', error.message)
    }
  }

  return userRef
}

const addCollectionAndDocuments = async (collectionKey, documentsToAdd) => {
  const batch = firestore.batch() // batch is for in case that something go wrong like lost internet, nothing get send. That way we have sure of what is  the data os the firestore
  const collectionRef = firestore.collection(collectionKey)

  documentsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc() // this is for the new doc to have an auto ID not the name.
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

//! Loook what this func is doing on the App
//!
//!
const getShopData = (collectionQuery) => {
  const products = {}
  collectionQuery.docs.forEach((doc) => {
    let { title, items } = doc.data()
    const titleWithNoWhiteSpaces = title.replace(/\s+/g, '').toLowerCase()
    let routeName = encodeURI(title.replace(' ', '').toLowerCase())
    products[routeName] = {
      id: doc.id,
      routeName,
      title,
      items,
    }
  })
  console.log(products)
  return products
}

export {
  auth,
  firestore,
  signInWithGoogle,
  userSignOut,
  addUserToDatabase,
  addCollectionAndDocuments,
  getShopData,
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

//?            *=*=*=*==*=*=*=  =*=*=*==*=*=*=*=*=*
// *=*=*=*==*=*=*= Functions for Tests =*=*=*==*=*=*=*=*=*
//?            *=*=*=*==*=*=*=  =*=*=*==*=*=*=*=*=*

// *=*=* convertQuerySnapshotToMap *=*=*
/*
? function 
? receive a query as @param 
? pass the query data(Array) to an object identifying the keys
?   with the title    
*/
const convertQuerySnapshotToMap = (sectionsQuery) => {
  // Isso ta retornando array de objetos
  const convertedQuerySnapshot = {}
  sectionsQuery.docs.map((doc) => {
    const { title, items } = doc.data()

    return (convertedQuerySnapshot[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    })
  })
  // console.log(convertedQuerySnapshot)
  // Aqui o acumulador é um objeto e cada section vai ser colocada nele com identificador acc[...title...]
  return convertedQuerySnapshot
}

// *=*=* getShopData *=*=*
//? what do
// const getShopData = () => {
//   const collectionQuery = firestore.collection('products')
//   // const productsSnapshot = await productsRef.get()
//   let shopObject = {}
//   const observer = collectionQuery.onSnapshot((collectionQuerySnapshot) => {
//     return collectionQuerySnapshot.docs.forEach((doc) => {
//       let { title, items } = doc.data()
//       // let sectionObjectName = title.toString().toLowerCase()
//       let routeName = encodeURI(title.toLowerCase())
//       return (shopObject[routeName] = {
//         title,
//         routeName,
//         items,
//       })
//     })
//   })
//   return shopObject
// }

// *=*=* getShopData *=*=*
//? what do

// const getShopData = async () => {
//   const collectionRef = firestore.collection(`products`)

//   const collectionSnapshot = await collectionRef.get()
//   if (!collectionSnapshot.empty) {
//     console.log(collectionSnapshot.docs.map((doc) => doc.data()))
//   }
// }

// *=*=* quandoOShopMudarNoCliente *=*=*
//? what do

// const quandoOShopMudarNoCliente = async (section, item) => {
//   // const query = firestore.doc(`products/${section.id}/${item.id}`)
//   const query = firestore.collection(`products`)
//   query.onSnapshot(async (snapshot) => {
//     console.log(snapshot)
//   })
// }
