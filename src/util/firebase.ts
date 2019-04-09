import firebase from 'firebase'

const firebaseConfig = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-AUTH-DOMAIN>',
  databaseURL: '<YOUR-DATABASE-URL>',
  storageBucket: '<YOUR-STORAGE-BUCKET>'
}

export const connectToFirebase = () => firebase.initializeApp(firebaseConfig)
