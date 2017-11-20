import firebase from 'firebase';

 const app = firebase.initializeApp({
    apiKey: "AIzaSyCu2o1CHFHtDCk8XD2FnSQIGUByXN7r1j0",
    authDomain: "tech-blog-70fe9.firebaseapp.com",
    databaseURL: "https://tech-blog-70fe9.firebaseio.com",
    projectId: "tech-blog-70fe9",
    storageBucket: "tech-blog-70fe9.appspot.com",
    messagingSenderId: "141605814096"
});
 const db = app.database();
 const postsRef = db.ref('Posts');

 export {
     app,
     db,
     postsRef
 }
