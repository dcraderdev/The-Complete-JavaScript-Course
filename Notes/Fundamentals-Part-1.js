// Data-Types

// The 7 Primitive Data Types

// 1. number - all numbers are floating point numbers (all have decimals)
// 2. string - sequence of characters (use single quotes)
// 3. boolean - logical type that can only be true or false

// 4. Undefined - value taken by a variable that is not yet defined ('empty value')
// 5. Null - also means empty value
// 6. symbol - value that is unique and cannot be changed
// 7. BigInt - larger integers than the Number type can hold

let javaScriptIsFun = true;
console.log(javaScriptIsFun);


// Declaring Variables

//    let
//    const
//    var

// let - use let to declare variables that can change later

let age = 30;
age = 31;

console.log(age)
// 31

// const - use const to declare variables that will not change

const birthYear = 1992;

// var - var is basically the old way of naming variables
// works basically the same as let
// dont use var

var job = 'programmer';
job = 'teacher';

console.log(job);
// teacher



// Basic Operators

// Operators allow us to transfer values and combine mulitple values

// arithmetic Operators

const ageDonovan = 2022 - 1992
const currentYear = 2022
const monaBirthYear = 1992
const monaAge = monaBirthYear - currentYear


const age = '18';
if (age === 18) console.log('You just became an adult XD (strict)');
if (age == 18) console.log('You just became an adult XD (loose)');


prompt("What's your favorite number?");
