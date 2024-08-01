let nara = "I can do it";
console.log(nara);

function greetWorld() {
  console.log("Hi Nara!");
}

greetWorld();

function calculator(firstnum, secondnum) {
  console.log(firstnum * secondnum);
}

calculator(3, 4);

function calculator2(width, height) {
  const area = width * height;
  return area;
}

console.log(calculator2(5, 6));

console.log(typeof nara);

const inputYear = "1990";
const inputYear2 = Number(inputYear);
console.log(typeof inputYear2);
console.log(typeof inputYear);

// switch문
const day = "Friday";
switch (day) {
  case "monday":
    console.log("Fresh start new week!");
    console.log("You got this Nara");
    break;

  case "tuesday":
    console.log("Time to work!");
    break;
  case "wendesday":
  case "Thursday":
    console.log("Time to get the chicken wings!");
    break;
  case "Friday":
    console.log("Yay Happy Friday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("We all deseved the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Fresh start new week!");
  console.log("You got this Nara");
} else if (day === "tuesday") {
  console.log("Time to work!");
} else if (day === "wednesday" || day === "Thursday") {
  console.log("Time to work!");
} else if (day === "Friday") {
  console.log("Yay Happy Friday!");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("We all deverved the weekend!");
} else {
  console.log("Not a valid day!");
}

//Ternary Operator
const age = 23;
//emoji window key + .
age >= 18
  ? console.log("I like to drink wine🍷")
  : console.log("I like to drink water 👌");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "Wineeee" : "Waterrr"}`);

let carrie = "I can do it Nara!";
console.log(carrie);
