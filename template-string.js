const priya = 'Asif Akbar';
const meye = "Meye ki dokho chinoni";
const kobita = `Kobita tomi shopno charini`;

const multiLine = 'This is my first line. \n' +
    'This is my second line. \n' +
    'this is third line ';

// ES6---------------
const multiLineNew = `This is my first line. This is my first line. This is my first line. 
This is my first line. This is my first line. This is my first line.
This is my first line.`;

const friends = ['Abul', 'Babul', 'Cabul', 'Sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend - 5</h3>';
const old2 = '<h3 class="friend-name">Friend - ' + count + '</h3>';
// ES6 ------------
const new1 = `<h3 class="friend-name">Friend -${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend -${friends.length}</h3>`;


const first = 'Mamun';
const last = 'Hasan';
const completeName = first + ' ' + last;
const completeNameOld = 'This person name is' + first + ' ' + last;
// ES6-------
const completeNameNew = `${first} ${last}`;
const completeNameNew1 = `This person name is: ${first} ${last}. Has money ${friends.length * 500 }`;