import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({

    apiKey: "AIzaSyD9vb7bpLtWgsr445DAKhKTyogrheeU1UA",
    authDomain: "personal-chat-c587c.firebaseapp.com",
    projectId: "personal-chat-c587c",
    storageBucket: "personal-chat-c587c.appspot.com",
    messagingSenderId: "798470639431",
    appId: "1:798470639431:web:0a0f3055fa8982c9b54662",
    measurementId: "G-8PJF5XK1R1"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

