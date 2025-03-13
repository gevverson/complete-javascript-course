'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //hiding the dice
let scores, currentScore, activePlayer, playing; //declaring variables
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
//hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});
//switch player function
function switchPlayer() {
  document.getElementById(`current
    --${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
//resetting the game
btnNew.addEventListener('click', function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  //holding current score
    
});
/*


Workspace: Let me explain this dice game implementation step by step.

### Initial Setup
The code starts by selecting various DOM elements using `querySelector`. These elements represent the players, scores, dice, and control buttons. The code uses a clean naming convention with descriptive variables like `player0El`, `score1El`, etc.

### Game State Variables
The game uses several key variables to track the state:
- `scores`: Array holding both players' total scores
- `currentScore`: The current round score
- `activePlayer`: Tracks which player is currently playing (0 or 1)
- `playing`: Boolean flag to control if the game is active

### Core Game Mechanics

#### Rolling the Dice
When the roll button is clicked:
1. Generates a random number between 1-6
2. Updates the dice image
3. If the roll isn't 1:
   - Adds to current score
   - Updates the display
4. If the roll is 1:
   - Switches to the next player
   - Resets current score

#### Hold Function
The hold button:
1. Adds current score to player's total score
2. Checks for victory (score ≥ 100)
3. If victory:
   - Adds winner class
   - Ends game
4. If no victory:
   - Switches to next player

### Player Switching
The `switchPlayer` function handles player transitions by:
- Resetting current score display
- Toggling active player status visually
- Switching the `activePlayer` variable

### Game Reset
The new game button resets all game states:
- Scores back to 0
- Player 1 becomes active
- Removes winner styling
- Resets game state variables

This code follows good practices with clear variable naming, logical organization, and effective use of DOM manipulation.*/

