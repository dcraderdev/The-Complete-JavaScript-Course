// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// terminal command: live-server
// auto reloads chrome when file saves

const x = '23';


// using google, stack and MDN
// const calcAge = birthYear => 2022 - birthYear;
// console.log(calcAge(x));

// Problem
// we work for a company building a smart home thermometer. Our most recent task is this:"Given an array of temps of one day, calculate the temps amplitude. Keep in mind that someimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. understanding the problem
// what is temperature amplitude: difference between highest and lowest temps
// how to compute max and min temperatures:

//2. breaking up into sub problems
// given an array
// if error skip to next reading
// find max value
// find min value
// subtract min from max
// return difference

// const calcTempAmplitude = function (temps1, temps2) {

//   let combinedTemps = temps1.concat(temps2);
//   let max = combinedTemps[0];
//   let min = combinedTemps[0];

//   for (let i = 0; i < combinedTemps.length; i++) {
//     const curTemp = combinedTemps[i]
//     if (typeof combinedTemps[i] !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;

//   }
//   console.log(max, min);
//   return max - min
// };

// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures, [-40, 4000, 400000]);
// console.log(calcTempAmplitude(temperatures, [-40, 4000, 400000]));

// Problem 2 - Function should now recieve two arrays of temperatures

//merge two arrays into 1 array then run the new array throught he same function we had jsut created

//debugging
// debugging with the console and breakpoints

// 273 + degrees celcius = kelvin

const measureKelvin = function () {
  const measurment = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:'))
    value: 10
  };

  const kelvin = measurment.value + 273;


  return kelvin;
};

console.log(measureKelvin());
console.log('Hello!');


// using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {

  let combinedTemps = temps1.concat(temps2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < combinedTemps.length; i++) {
    const curTemp = combinedTemps[i]
    if (typeof combinedTemps[i] !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;

  }
  console.log(max, min);
  return max - min
};

calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
calcTempAmplitudeBug(temperatures, [-40, 4000, 400000]);
console.log(calcTempAmplitudeBug(temperatures, [-40, 4000, 400000]));


// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]
// GOOD LUCK 😀

// `... ${} in 1 days ... ${} in 2 days ... ${} in 3 days ...`

const dataOne = [17, 21, 23];
const dataTwo = [12.5, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = ""
  let count = 1
  for (let i = 0; i < arr.length; i++, count++) {
    forecast += (`...${arr[i]}°C in ${count} days `);
  }
  console.log(forecast);
  return forecast;
}



printForecast(dataOne);
