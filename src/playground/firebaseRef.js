// import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyAy0TGIZ_6zQfGeuBTZLy7zwYBIVhRiZ7g",
//   authDomain: "expensify-2d007.firebaseapp.com",
//   databaseURL: "https://expensify-2d007.firebaseio.com",
//   projectId: "expensify-2d007",
//   storageBucket: "expensify-2d007.appspot.com",
//   messagingSenderId: "545595463857"
// };

// firebase.initializeApp(config);

// const database = firebase.database();

// const pushExpenses = (data) => {
//   database.ref('expenses').push(data);
// };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then();

// pushExpenses({
//   description: 'd1',
//   note: 'n1',
//   amount: 100,
//   createdAt: 0
// });

// pushExpenses({
//   description: 'd2',
//   note: 'n2',
//   amount: 200,
//   createdAt: 5
// });

// pushExpenses({
//   description: 'd3',
//   note: 'n3',
//   amount: 300,
//   createdAt: 10
// });

// database.ref('age').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });



// database.ref().set({ 
//   name: 'Tristan',
//   age: 22,
//   isSingle: true,
//   location: {
//     city: 'Seattle',
//     country: 'USA'
//   }
// }).then(() => {

// }).catch((error) => {

// });

// database.ref('age').set(30);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//   height: 50,
//   wheight: 100
// }).then(() => {
//   console.log('data stored');
// }).catch((error) => {
//   console.log('An an error happened', e);
// }); 

// database.ref('isSingle').remove().then(() => {
//   console.log('isSingle was removed');
// }).catch(() => {
//   console.log('something bad happend');
  
// })