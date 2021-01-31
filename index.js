let name = 'Michael';
let age = 30;
let person = {
    name: 'Michael' ,
    age: 30
};

// Dot Notation
person.name = 'John'

// Bracket Notation
person['name'] = 'Mary'
// Array basic example
let selectedColors = ['red','blue'];
selectedColors[2] = 'green';

//Function performing 
function greet(name, lastName) {
    console.log('Hello ' + name +' '+ lastName);
}

greet('Michael', 'Carey');
greet('Ryan', 'Jackson');

// Calculating a value
function square(number) {
   return number * number;
}

console.log(square(2));

function hello() {
    return 'Hello World!';
}
console.log(hello())

function color(a) {
    return 'hello dawg';
}
function color(b) {
    'hello cat';
}

console.log(color(a));