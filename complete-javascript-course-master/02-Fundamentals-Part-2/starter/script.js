// // 'use strict' has to be the first thing written in the code or else it wont work. Comments do not count against this.
// // stict mode makes is easier to avoid accidental errors
// // strict mode forbids us to do certain things
// // strict mode creates visible errors so we can see where our code is going wrong.

'use strict'

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriverLicense = true;

// // if (hasDriversLicense) console.log(`I can drive!`);

// // const interface = 'Audio';
// // const private = 534;
// // // 'use strict' will prevent these names from being used since that name is reserved for other functions that may be used in the future


// // a 'function' is essentially a variable that holds a block of code that we can use over and over again at our leisure

// function logger() {
//   console.log('My name is WHO?');
// }

// logger();
// //^^ calling the function, invoking the function, running the function

// console.log(`chikka chikka slim shady`)

// // function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// // const appleJuice = fruitProcessor(5, 0);
// // const orangeJuice = fruitProcessor(0, 5);
// // const mixJuice = fruitProcessor(3, 2);

// // console.log(appleJuice);
// // console.log(orangeJuice);
// // console.log(mixJuice);


// // Function declarations and expressions

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(2011);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }

// const age2 = calcAge2(1992);

// console.log(age1, age2);

// // Arrow functions

// // shorter and faster to write than declarations and expressions

// // const calcAge3 = birthYear => 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = 2037 - birthYear;
// //   const retirement = 65 - age;
// //   return `${firstName} is only ${retirement} years away from retirement!`
// // }

// // console.log(yearsUntilRetirement(1991, 'Doug'));

// // functions calling other functions

// function fruitChop(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = fruitChop(apples);
//   const orangePieces = fruitChop(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange slices.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// const orangeJuice = fruitProcessor(0, 5);
// const mixJuice = fruitProcessor(3, 2);

// console.log(fruitProcessor(2, 3));

// console.log(appleJuice);
// console.log(orangeJuice);
// console.log(mixJuice);


// const calcAge3 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// }
// console.log(yearsUntilRetirement(1991, 'Doug'));
// console.log(yearsUntilRetirement(1995, 'Bob'));
// console.log(yearsUntilRetirement(1650, 'Jim'));


// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function'checkWinner'that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

//test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win! ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win! ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log(`No one wins!`)
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Intro to arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// not an ideal way to list a series of friends
//bundle all these names into an array to save time

const goodfriends = ['Mike', 'Steve', 'Pete'];
console.log(goodfriends);
// (3) ['Mike', 'Steve', 'Pete']

// const years = new Array(19, 20, 21, 22, 23);
// console.log(years);
// (5) [19, 20, 21, 22, 23]

console.log(goodfriends[0]);
// Mike

console.log(goodfriends.length);
// 3

console.log(goodfriends[goodfriends.length - 1]);
// Pete

console.log(goodfriends[goodfriends.length - 2]);
// Steve

console.log(goodfriends);
// (3) ['Mike', 'Steve', 'Pete']

goodfriends[2] = 'Jay';

console.log(goodfriends);
// (3)['Mike', 'Steve', 'Jay']

function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const years = [1990, 1992, 1880, 1776];
const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[2]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);


// basic array operations (methods)

// add elements
const friends = ['Mike', 'Steve', 'Pete', 'T', 'B', 'F'];
friends.push('Jay');
console.log(friends);
// (4) ['Mike', 'Steve', 'Pete', 'Jay']

friends.unshift('John');
console.log(friends);
// (5) ['John', 'Mike', 'Steve', 'Pete', 'Jay']

// remove elements
friends.pop(); // last
console.log(friends);
// (4) ['John', 'Mike', 'Steve', 'Pete']

friends.shift(); // first
console.log(friends);
// (3) ['John', 'Mike', 'Steve']

console.log(friends.indexOf('Steve'));
// 1
console.log(friends.indexOf('Bob'));
// -1 (doesnt exist)

console.log(friends.includes('Steve'));
// true
console.log(friends.includes('Bob'));
// false


// Coding challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

const calcTip = function (bill) {
  if (bill <= 50 && bill >= 300) {
    return bill * .2;
  } else {
    return bill * .15;
  }
}

const bills = [127, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);


console.log(calcTip(127));
console.log(calcTip(555));
console.log(calcTip(44));
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);


// Intro to objects
// similar to hashs in ruby

const donovan = {
  firstName: 'Donovan',
  lastName: 'Crader',
  age: 30,
  friends: friends
};

console.log(donovan.lastName);
console.log(donovan[2]); //undefined

console.log(donovan.lastName + ", " + donovan.firstName);

console.log(donovan['lastName']);
console.log(donovan['lastName']);

const nameKey = 'Name';
console.log(donovan['first' + nameKey]);

console.log(donovan['last' + nameKey]);

// const interestedIn = prompt('HELLO, PLEASE CHOOSE AND ENTER ONE OF THE FOLLOWING: firstName, lastName, age');

// console.log(donovan[interestedIn]);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. Foreachofthem,createanobjectwithpropertiesfortheirfullname,mass,and height (Mark Miller and John Smith)
// 2. Createa'calcBMI'methodoneachobjecttocalculatetheBMI(thesame method on both objects). Store the BMI value to a property, and also return it from the method
// 3. LogtotheconsolewhohasthehigherBMI,togetherwiththefullnameandthe respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 😀


const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

mark.calcBMI();
console.log(mark.bmi);

// iteration : the for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights rep ${rep} 🏋🏾‍♂️`);
// }

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Mike', 'Steve', 'Bob'],
//   true
// ];
// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const birthYears = [1991, 1992, 1993, 1994, 1995];
// // calculate age and store them in new array
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(2022 - birthYears[i]);
// }

// console.log(ages);

// // continue and break

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   //34,
//   'teacher',
//   ['Mike', 'Steve', 'Bob'],
//   true,
//   34
// ];
// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;
//   if (typeof jonasArray[i] === 'number') break;


//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);


const monaArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  //34,
  'teacher',
  ['Mike', 'Steve', 'Bob'],
  true,
  34
];

for (let i = monaArray.length - 1; i > 0; i--) {
  console.log(`Currently on ${monaArray[i]} @ array pos ${i - 1}`)
};

for (let exercise = 1; exercise <= 3; exercise++) {
  (let exercise = 1; exercise <= 3; exercise++)
  console.log(`Lifting weights! On exercise ${exercise}! 🏋🏾‍♂️`);
}
