"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key : value };

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "Ellie Kim", age: 17 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob); //output -> true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // output -> undefined

// 2. Computed properties
// key should be always 'string' {key : value}
console.log(ellie.name); // output -> Ellie Kim
console.log(ellie["name"]); // output -> Ellie Kim  이것도 엘리킴.
// 두가지 접근방법이다. 이때 주의할 것은 ellie[name]으로 하면 undefined이다.반드시 string으로.

ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, "name"); //Ellie Kim
printValue(ellie, "age"); // 17

// 3. Property value shorthand
const person1 = { name: "Bob", age: 3 };
const person2 = { name: "Steve", age: 15 };
const person3 = { name: "Dave", age: 13 };

// if you want to make person 4?
// you can do manually but, it's better to do like below
const person4 = makePerson("Nara", 23);
function makePerson(name, age) {
  return {
    name: name,
    age: age,
  };
}
console.log(person4);

// But in JavaScript, if the key name is the same as the parameter name, you can omit it.
const person5 = makePerson("Chai", 4);
function makePerson(name, age) {
  return {
    name,
    age,
  };
}
console.log(person5);

// 4. Consturctor Function
// Now that JavaScript supports classes (introduced in ES6),
// using classes is generally a more modern and readable way to create objects.
function Person(name, age) {
  // 'this'는 새로 생성된 객체를 가리킴
  this.name = name; // this.name은 새 객체의 'name' 속성
  this.age = age; // this.age도 새 객체의 'age' 속성
}
const person6 = new Person("Mango", 6);
console.log(person6);
