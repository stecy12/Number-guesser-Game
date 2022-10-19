prompt("Enter Usernames");
let min = 1;
let max = 2;
let winningNum = Math.floor(Math.random() * (max) + min);
let stage = 1;
let point = 0;

const minNum = document.querySelector('.min');
const maxNum = document.querySelector('.max');
const guessInput = document.getElementById("number");
const guessBtn = document.getElementById("guess-btn");
const stages = document.querySelector('.stage');
const points = document.querySelector('.point');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;
stages.textContent = stage;
points.innerHTML = point;

//input function
guessBtn.addEventListener('click', function(e) {
  e.preventDefault();
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess < max) {
    setMessage(`Enter the number between ${min} and ${max}`, 'red')
  }
  if (guess === winningNum) {
    setMessage(`You are correct....!`, 'green');
    points.innerHTML = point += 1;
    maxNum.textContent = max += 1;
    stages.textContent = stage += 1;
    winningNum++;
    winningNum = Math.floor(Math.random() * (max) + min)

    // console.log(winningNum);
  }
})

function setMessage(mgs, color) {
  message.textContent = mgs;
  message.style.color = color;
}