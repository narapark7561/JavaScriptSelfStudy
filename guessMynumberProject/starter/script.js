'use strict';

//DOM 공부

console.log(document.querySelector('.message').textContent);
//text content를 읽는것.애초에 세팅된 start guessing이 나타난다

document.querySelector('.message').textContent = 'Corret Number!💕';
//위처럼 하면 화면의 메세지가 바뀐다. 그러나 콘솔은 그대로 start guessing

console.log(document.querySelector('.message').textContent);
//이렇게 하면 개발자 콘솔도 Corret Number!라고나온다.

document.querySelector('.number').textContent = 7;
document.querySelector('.score').textContent = 21;
