import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzOGIHeoaBVK3cx6pvXxoQCIqqD6pST_U",
  authDomain: "crudreactfirebase-7a063.firebaseapp.com",
  databaseURL: "https://crudreactfirebase-7a063.firebaseio.com",
  projectId: "crudreactfirebase-7a063",
  storageBucket: "crudreactfirebase-7a063.appspot.com",
  messagingSenderId: "521254758801",
  appId: "1:521254758801:web:85689466cd448510241230"
};
  const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();

