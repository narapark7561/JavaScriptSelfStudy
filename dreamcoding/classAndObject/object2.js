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

// 5. in operator: property excistence check (key in obj)
console.log("name" in ellie); // true
console.log("birthday" in ellie); // false

// 6. for..in vs for..of
// for (key in obj)
console.clear(); //위의 로그들을 다 clear하는것
for (key in ellie) {
  console.log(key);
}
//Output
// name
// age
// hadJob

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
} // 1 2 4 5 가 output

// 7. Fun cloning
const user = { name: "Chai", age: "4" };
const user2 = user;
user2.name = "Coder";
console.log(user); // { name: 'Coder', age: '4' }
// user 1의 이름이 바뀐 이유는 무엇일까?
// user2 = user로 할당하면 user와 user2는 동일한 객체를 가리키는
// 동일한 참조(reference)를 공유하게 된다.
// 그래서 user2의 name을 변경하면, 같은 객체를 참조하고 있는 user의 name도 함께 바뀌게 된다.

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3); // { name: 'Coder', age: '4' }

// new way
const user4 = {};
Object.assign(user4, user);
//or
const user5 = Object.assign({}, user);
console.log(user4); // { name: 'Coder', age: '4' }
console.log(user5); // { name: 'Coder', age: '4' }

// Object.assign()을 사용할 때 주의할 점:
// 여러 객체를 섞을 때, 같은 키를 가진 속성은 맨 마지막에 있는 객체의 값이 앞의 값을 덮어씌운다.
// example
const fruit1 = { color: red };
const fruit2 = { color: blue, size: big };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
