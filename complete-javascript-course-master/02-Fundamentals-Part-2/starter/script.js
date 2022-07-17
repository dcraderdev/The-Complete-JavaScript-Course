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
