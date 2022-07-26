'use strict';
// how to modify/manipulate class elements

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = `Wooo!`;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = `13!`;
// document.querySelector('.score').textContent = `200!`;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// handling click events

// when our code reacts to sometyhing in the dom

// event list is something that happens on the page, lots of different events that can happen

let number = Math.trunc(Math.random() * 20 + 1)
let score = 20 // our initial score, will be changed later

//this reveals what the secret number is by overwriting the .number class
// this usually shows a question mark in the middle of the screen

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    // when player wins
    // we can also edit css attributes to change from within our js code
  } else if (guess === number) {
    //changes message
    document.querySelector('.message').textContent = `You got it!!`;
    // changes background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // makes number box bigger
    document.querySelector('.number').style.width = '30rem';
    // shows number when guessed correctly
    document.querySelector('.number').textContent = number


    // when player's guess is too big
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `${guess} is too big!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `YOU LOSE!`;
      document.querySelector('.score').textContent = 0;
    }
    // when player's guess is too small
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `${guess} is too small!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `YOU LOSE!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// addEventListener is the most used way to react to something happening on our page
// add the type of event in the parameters - 'click'
// define a function that should be executed whenever this 'click even happens' - called the event handler
// second argument is the function that you will be passing in -
// , function () {
//   console.log(document.querySelector('.guess').value);
// })
// we can store these functions into a variable to log to the console and we can also manipulate several things at once with a single action
// we can use the typeOf operator to check what sort of input we are receiving
// we may have to manipulate this input into a more usable form by converting the string to a number using the Number function
// we can use an if statement to print somethign to the console in case we dont get any input

// Implement the game logic!
// have to implement when the guess is too low, too high, or the correct number
// we define this 'secret number' outside of the handler function
// this way each new click doesnt happen whenever a click happens
// const number = Math.random() gives us a random number between 0 and one
// we can manipulate the result by multiplying the number: const number = Math.random()*20
// this will give us a number with a lengthy amount of decimals so to conteract this we can use the method
// Math.trunc(Math.random()*20+1)
// trunc will never give us the number 20 so we add 1

//we store the score in a variable so that way we have access to it whenever we need to use it in our code
// we can decrease this score with --score, which is the same as writing score = score - 1
// and then print it to the score class using querySelector('.score') = score
//

//     document.querySelector('body').style.backgroundColor = '#60b347';

// this sets the back ground color to green when the player guessing the correct number.
// We can edit the csss code within our program by adding in style.'whatever we'd like to edit'

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach click event handler 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color(#222) and number width(15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

});
