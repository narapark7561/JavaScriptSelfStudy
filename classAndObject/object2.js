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
