// var obj = {
//     name: 'Samer'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Samer", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// originalNoteString

// challenge personal answer
// var originalNoteString = {
//     name: 'samer'
// };

// challenge instroctor answer
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

// note

// challenge personal answer
// var note = {
//     title: 'your name'
// };

// challenge instroctor answer
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);