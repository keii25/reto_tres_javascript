var scanf = require('scanf');

console.log('\n');
console.log('What person are you looking for in House of the Dragon ?');
let personaje = scanf('%s');

let personajesHOD = [ 
    'Rhaenerya', 
    'Daemon', 
    'Viserys', 
    'Alicent'
];

let searchPerson = personajesHOD.find(person => person.toLowerCase() === personaje.toLowerCase());
let messageFound = 'Successfully found !';
let messageNotFound = 'Ups, Is not foun person';

setTimeout(() => { 
    searchPerson ? console.log(`${messageFound} ${personaje}`) : console.log(messageNotFound); 
}, 4000);

console.log('\n');
console.log('Searching....');






