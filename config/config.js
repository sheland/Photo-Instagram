import firebase from 'firebase';

//api details
 const config = {
   apiKey: "AIzaSyAMhxepwKlCtWsFuzB6stwfV2F41iDjTps",
   authDomain: "photofeed2-d58be.firebaseapp.com",
   databaseURL: "https://photofeed2-d58be.firebaseio.com",
   projectId: "photofeed2-d58be",
   storageBucket: "photofeed2-d58be.appspot.com",
   messagingSenderId: "508457832851"
 };

 firebase.initializeApp(config);

 //connect each parts of firebase features to variables for us to use throughout our application
export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

// ****set data*******
//database.ref('/refName/childRef2').set("value!");

//****update data*****
//var updates = {};
//updates['/refName/childRef2'] = 'a value';
//updates['/numbers'] = 5;
//database.ref.update(updates);

///****delete data*****
//database.ref('/numbers').remove();
