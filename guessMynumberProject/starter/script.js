'use strict';

/*

//DOM 공부

console.log(document.querySelector('.message').textContent);
//text content를 읽는것.애초에 세팅된 start guessing이 나타난다

document.querySelector('.message').textContent = 'Corret Number!💕';
//위처럼 하면 화면의 메세지가 바뀐다. 그러나 콘솔은 그대로 start guessing

console.log(document.querySelector('.message').textContent);
//이렇게 하면 개발자 콘솔도 Corret number!라고나온다.

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 21;

//Input의 내용을 변경하는방법
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//넘버를 랜덤으로 나오게하는 로직 구현하기

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

/*

document.querySelector('.check').addEventListener
('click', function () {
  console.log(document.querySelector('.guess').value);
});

*/
//위의 것과 밑의 것은 같은 것.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input or not number input
  if (!guess) {
    document.querySelector('.message').textContent = 'Need a Number!😒';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corret Number!!💕';
    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = secretNumber; // If user win, show secret number

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!🥶';
      //score = score - 1; 같은거임 밑에랑
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🌚';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!🤖';
      //score = score - 1; 같은거임 밑에랑
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!🌚';
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
