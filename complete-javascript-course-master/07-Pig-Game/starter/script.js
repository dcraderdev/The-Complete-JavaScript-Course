'use strict';

// first player to get 100 points wins



// when roll dice is clicked
// the dice roll random num: 1-6
// show random num on dice
// if 2-6, the points are added to current score
// if 1, the player loses current score and turn is over


// while player active
// players background color is lighter pink
// if player clicks 'hold' before rolling a
// their points are added to total score and turn is ended
// display new score
// if score > 100,
// that player wins and background goes blackish
// roll dice and hold btn dont work


// new game btn
// resets all scores(set to 0)
// player 1's turn

// we use the # to select different IDs ('#score--0')
// we use . to select different classes ('.player')

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// // active player is '0' becuase we are actually storing our scores into the scores const - which is an array. so really its kind of like player 1 is array pos 0, and player 2 is array pos 1
// let activePlayer = 0;
// let playing = true;



const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// rolling dice functionality
btnRoll.addEventListener('click', function () {

  if (playing) {
    // generate a random dice roll 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check if roll 2-6, add to score, if 1 change players and erase current score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to grand score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // check score is > 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      switchPlayer();
    }
    // if yes - end game
    // if no - switch player
  }
});

btnNew.addEventListener('click', init)


  //   document.getElementById(`score--0`, `score--1`).textContent = 0;
  //   document.getElementById('#current--0', '#current--1').textContent = 0;

  //   document.querySelector(`.player--0}`).classList.add('player--active');
  //   document.querySelector(`.player--1`).classList.remove('player--active');

  // })
