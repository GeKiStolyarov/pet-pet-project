import firebase from 'firebase';

export const appName = 'pet-pet-project';
export const firebaseConfig = {
  apiKey: 'AIzaSyAdAySWGbIV7PAZQ6SESn8xFfHOeYG6Bck',
  authDomain: 'pet-pet-project.firebaseapp.com',
  databaseURL: 'https://pet-pet-project.firebaseio.com',
  projectId: 'pet-pet-project',
  storageBucket: 'pet-pet-project.appspot.com',
  messagingSenderId: '333074835973',
};

firebase.initializeApp(firebaseConfig);
