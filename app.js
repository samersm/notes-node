console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var res = notes.addNote();
// console.log(res);

// Challenge personal answer
// var res = notes.add();
// console.log(res);

// Challenge Teacher answer
var res = notes.add();
console.log('Result: ', notes.add(9, -2));


// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
