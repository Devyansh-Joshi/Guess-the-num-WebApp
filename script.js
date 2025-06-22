'use strict';

const body = document.querySelector('body');
const input = document.querySelector('.guess');
const submit = document.querySelector('.btn.check');
const again = document.querySelector('.btn.again');
const hint = document.querySelector('.message');
const score = document.querySelector('.score');
const hScore = document.querySelector('.highscore');
const displayNum = document.querySelector('.number');
let random = Math.trunc(Math.random() * 20) + 1;

submit.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    checkGuess(Number(input.value.trim()));
    input.focus();
  }
});
again.addEventListener('click', restartGame);

function displayMessage(message) {
  hint.textContent = message;
}
function checkGuess(guess) {
  input.value = '';
  const hp = Number(score.textContent);
  if (guess === random) {
    displayMessage('Correct Number');
    body.style.backgroundColor = '#60b347';
    displayNum.textContent = guess;
    submit.disabled = true;
    hScore.textContent =
      score.textContent > hScore.textContent
        ? score.textContent
        : hScore.textContent;
  } else if (guess !== random) {
    if (hp > 1) {
      displayMessage(guess > random ? 'Too high!' : 'Too Low!');
      score.textContent = hp - 1;
    } else {
      displayMessage('Game Over');
      body.style.backgroundColor = 'Red';
      submit.disabled = true;
      score.textContent = '0';
    }
  }
}

function restartGame() {
  console.log('test');
  random = Math.floor(Math.random() * 20);
  input.focus();
  displayMessage('Start guessing ...');
  body.style.backgroundColor = '#222';
  score.textContent = 20;
  submit.disabled = false;
  displayNum.textContent = '?';
}
