const functions = require('firebase-functions');

exports.lowercase = functions.database.ref(`messages/{messageId}`)
.onWrite(event=> {
   const messageKey = event.data.key;
   const messageValue = event.data.val();
   const lowercaseBody = messageValue.body.toLowerCase();

   return event.data.ref.child('lowercase').set(lowercaseBody);
});



exports.uppercase = functions.database.ref(`messages/{messageId}`)
.onWrite(event=> {
   const messageKey = event.data.key;
   const messageValue = event.data.val();
   const uppercaseBody = messageValue.body.toUpperCase();

   return event.data.ref.child('uppercase').set(uppercaseBody);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
