import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDw4CUpj18AbmMj-ToyH1UZU3r-kc91Gj4',
    authDomain: 'liquid1-b79b1.firebaseapp.com',
    databaseURL: 'https://liquid1-b79b1-default-rtdb.firebaseio.com/',
    projectId: 'liquid1-b79b1',
    storageBucket: 'liquid1-b79b1.appspot.com',
    messagingSenderId: '977177348679',
    appId: '1:977177348679:ios:b864db05b2c79af831bf62',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };