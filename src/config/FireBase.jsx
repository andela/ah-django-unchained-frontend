import * as firebase from 'firebase';

const firebaseConfigurations = {
  apiKey: 'AIzaSyAftJS4C6xAIm7SGJ_cpvsJ1FPM9xW5Cmo',
  authDomain: 'authors-haven-44179.firebaseapp.com'
};

firebase.initializeApp(firebaseConfigurations);

export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const TwitterProvider = new firebase.auth.TwitterAuthProvider();
