import firebase from 'firebase';

//api details
const config = {
    apiKey: "AIzaSyCNmnJYfc812JjunGYGhoG9Wez327CG-AI",
    authDomain: "backup-87d27.firebaseapp.com",
    databaseURL: "https://backup-87d27.firebaseio.com",
    projectId: "backup-87d27",
    storageBucket: "",
    messagingSenderId: "600746271463"
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

/*
******database strucure *********
Users/userid/   email,name,username,avatar

Photos/photo-id  author,caption,posted,url

Comments/photo-id//comment-id  author,posted,comment
*/
