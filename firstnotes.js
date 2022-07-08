// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// // a value is basically a piece of Data
// // most basic piece of information we have in programming

// console.log("Jonas");
// console.log(23);


// // let firstName = "Jim"
// // will store this value "Jonas" inside the variable
// // use camelCase to wirte variable names with 2 or more words
// // 3 or more words: capitalize [1..-1] words
// // variable names cannot start with a number



// // console.log(firstName);


// const myFirstJob = 'programmer';
// const mySecondJob = 'teacher';

// const country = 'United States';
// const continent = 'North America';
// const population = 332403650;

// console.log(country);
// console.log(continent);
// console.log(population);


// let isIsland = false;
// let language = 'English';

// console.log(isIsland);
// console.log(language);

// console.log(population + 10);

// const populationFinland = 6000000;
// console.log(population > populationFinland);









// let javaScriptIsReallyFun = true;
// console.log(javaScriptIsReallyFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsReallyFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');











//  // Data-Types

// // The 7 Primitive Data Types

// // 1. number - all numbers are floating point numbers (all have decimals)
// // 2. string - sequence of characters (use single quotes)
// // 3. boolean - logical type that can only be true or false

// // 4. Undefined - value taken by a variable that is not yet defined ('empty value')
// // 5. Null - also means empty value
// // 6. symbol - value that is unique and cannot be changed
// // 7. BigInt - larger integers than the Number type can hold

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);











// // Declaring Variables

// //    let
// //    const
// //    var

// // let - use let to declare variables that can change later

// let age = 30;
// age = 31;

// console.log(age)
// // 31

// // const - use const to declare variables that will not change

// const birthYear = 1992;

// // var - var is basically the old way of naming variables
// // works basically the same as let
// // dont use var

// var job = 'programmer';
// job = 'teacher';

// console.log(job);
// // teacher



// // Basic Operators

// // Operators allow us to transfer values and combine mulitple values

// // arithmetic Operators

// const ageDonovan = 2022 - 1992
// const currentYear = 2022
// const monaBirthYear = 1992
// const ageMona = currentYear - monaBirthYear

// console.log(ageMona);

// console.log(currentYear + '-' + monaBirthYear + '=' + ageMona)

// // assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x + 1 = 100
// console.log(x);

// // comparison operators

// console.log(ageDonovan > ageMona)
// console.log(18 > ageMona)







// // Operator Precedence

// // its kind of like math





// /*
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:

// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.


// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


// GOOD LUCK 😀
// */

// // const massJohn = 92;
// // const massMark = 78;
// // const heightJohn = 1.95;
// // const heightMark = 1.69;

// // let bmiJohn = massJohn / heightJohn ** 2
// // let bmiMark = massMark / heightMark ** 2



// // let markHigherBMI = bmiMark > bmiJohn;

// // console.log(markHigherBMI);
// // console.log(bmiJohn);
// // console.log(bmiMark);





// // Strings and teplate literals

// const firstName = 'Donovan';
// const newJob = 'programmer';
// // const birthYear = 1992;
// const year = 2022;


// const donovanInfo = `I'm ${firstName}, a ${year - birthYear} year old ${newJob}.`;
// console.log(donovanInfo);

// console.log(`String on
// mulitple
// lines. Just use the back
// tick :)`)








// // taking decisions - if/else statements

// const ageSarah = 15;
// const legalAge = 18
// const isOldEnough = ageSarah >= 18

// if(isOldEnough) {
//   console.log(`Enjoy your drinks!`);
// } else {
//   console.log(`Not today, Jr.! You have to wait ${ legalAge - ageSarah} years.`);
// }


// const birthYear2 = 2012;

// let century;
// if (birthYear2 <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);




// // Coding Challenge #2

// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// // Your tasks:
// // 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement 😉 GOOD LUCK 😀

// const massJohn = 92;
// const massMark = 78;
// const heightJohn = 1.95;
// const heightMark = 1.69;

// let bmiJohn = massJohn / heightJohn ** 2
// let bmiMark = massMark / heightMark ** 2



// let markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);
// console.log(bmiJohn);
// console.log(bmiMark);

// if(markHigherBMI = true){
//   console.log(`Mark's BMI is higher than John's! Mark's BMI is ${bmiMark}`);
// } else {
//   console.log(`John's BMI is higher than Mark's! John's BMI is ${bmiJohn}`);
// }







// //  Type Conversion

// const inputYear = '1991';

// console.log(Number(inputYear) + 18);
// // 2009
// console.log(inputYear + 18);
// // 199118
// console.log(Number('Donovan'));
// // NaN - not a number, still identifies as a number but causes errors



// //  Type Coercion

// console.log('I am ' + 30 + ' years old');
// // I am 30 years old
// // this works because of type coercion behind the scenes in JS.
// // A + converts the number to a string and keeps strings as strings.


// console.log('23' - '10' - 3);
// // 10
// // A - converts the string to a number and keeps numbers as numbers.

// console.log('23' - '10' - 3 + ' years old');







// // Truthy and Falsy Values

// // FIVE FALSY VALUES: 0, '', undefined, null, NaN


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Donovan'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!')
// }


const favNum = prompt("What's your favorite number?");
console.log(favNum);
console.log(typeof favNum);

if (favNum == 23) {
  console.log('Cool! 23 is an amzing number!')
} else if(favNum == 7) {
  console.log('Awesome! 7 is an awesome number!')
} else {
  console.log(`Your number's ok i guess...`)

}

const age = '18';
if (age === 18) console.log('You just became an adult XD (strict)');
if (age == 18) console.log('You just became an adult XD (loose)');










// // Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
// and operator
console.log(hasDriversLicense || hasGoodVision);
// or operator


const isTired = true
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("She can drive!");
} else {
  console.log("No way can she drive!");
}



// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!


// Your tasks:

// 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow

// 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks

// 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const dolphinScore = 96 + 108 + 89;
const koalaScore = 100 + 95 + 101

const dolphinAverage = dolphinScore/3
const koalaAverage = koalaScore/3

  console.log(dolphinAverage, koalaAverage);


if (dolphinAverage > koalaAverage) {
  console.log(`Dolphins win!`);
} else {
  console.log(`Koalas win!`);
}


if (dolphinAverage > koalaAverage && dolphinAverage > 100) {
  console.log(`Dolphins win!`);
} else if (koalaAverage > dolphinAverage && koalaAverage > 100) {
  console.log(`Koalas win!`);
} else if (koalaAverage === dolphinAverage && koalaAverage > 100 && dolphinAverage > 100) {
  console.log("Its a tie!")
}
else {
  console.log(`No one wins!`)
}
 change
