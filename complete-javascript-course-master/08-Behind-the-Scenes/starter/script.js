'use strict';

// high-level
//    do not have to manage resources because these programs have     extractions that take away these reposnibilites. will never be as fast as languages where you specify memory use but much easier

// garbage-collected
//    javascript automatically removes old, unused objects fromt he computer memory in order not to clog it up with unneccessary stuff

// interpreted or just-in-time compiled
//    our code is translated into 0s and 1s in order to be turned into machine code that the computer can read

// multi-paradigm
//    a paradigm is a n approach and overall mindeset about how we structure our code, which ulitmately directs the coding style and technique - examples: procedural, object-oriented, and functional programming. imperative or decla rative
//    javascript is all of it: procedural, object-oriented, and functional

// prototype-Based
//


// dynamic
//

// single-threaded
//


// first-calss functions
//

// event loop concurrency model


// hoisting - declaring variables



//
console.log(me);
//console.log(job);
//console.log(year);


var me = 'Donovan';
// vaariables made using var are hoisted using 'undefined'
let job = 'newb';
// cannot access job before initilization
const year = '2022';


console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
//function declarations

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b
