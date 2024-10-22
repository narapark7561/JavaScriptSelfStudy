"use strict";

// class Person {
//   constructor(name, age) {
//     this.name = name; //현재 객체의 내용에 접근하는 방식
//     this.age = age;
//   }

//   speak() {
//     console.log(`Hello ${this.name}!`);
//   }
// }

// const nara = new Person("Nara", 23);
// console.log(nara.name);
// console.log(nara.age);
// nara.speak();

//Getters and Setters  자판기 커피의 수량을 (integer)를 함부로 -1로 못하게 세팅을 하는것. 그래서 private를쓴다
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Chai", "Park", 4);
console.log(user1.age);
