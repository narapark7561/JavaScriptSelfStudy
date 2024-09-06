// function changeColor(newColor) {
//   const elem = document.getElementById("para");
//   elem.style.color = newColor;
// }

// const buttonElement = document.querySelector("#love");
// console.log(buttonElement);

//stud Udemy

const restaurant = {
  name: "Nara Bar",
  location: "1000 Centre Avenue",
  mainMenu: ["Steak", "Chicken", "Fish"],
  dessertMenu: ["Ice cream", "Dessert", "CheeseCake"],
  order: function system(mainNumber, dessertNumber) {
    return [this.mainMenu[mainNumber], this.dessertMenu[dessertNumber]]; //object정의가 array니 당연히 return도 array로해야한다
  },
};

// console.log(restaurant);

console.log(restaurant.name);

let [first, second] = restaurant.mainMenu;
console.log(first, second);

let temp = first;
first = second;
second = temp;
console.log(first, second);

const chaiOrder = restaurant.order(1, 1);
console.log(chaiOrder);

console.log(restaurant.order(0, 0)); //위의것과 같은 방법

//const newMenu = restaurant.mainMenu;
const newMenu = [...restaurant.mainMenu];
console.log(newMenu);

//join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.dessertMenu];
console.log(menu);
menu.push("pasta");
console.log(menu);
console.log(restaurant.mainMenu, restaurant.dessertMenu);

// Default Parameters

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199; -> 이 방법 대신에 위에 다가 default parameter를 넣어주면된다.
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking); // createBooking함수가 호출될때마다 새로운 예약 object가 array에 더해지게 된다.
};

createBooking("WS256");

const reservations = [];

const createReservation = function (
  dogName,
  numOfDogs = 1,
  price = 85 * numOfDogs
) {
  const reservation = {
    dogName, //자바스크립트에서는 변수를 사용하기 전에 꼭 선언을 해줘야한다.
    numOfDogs,
    price,
  };

  console.log(reservation);
  reservations.push(reservation);
};

createReservation("Chai", 3);
createReservation("Mango", 2);

/// How to passing the arguments
const flight = "WS234";
const jonas = {
  name: "Jonas Kim",
  passport: 464646464,
};

const checkIn = function (filghtNum, passenger) {
  filghtNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 464646464) {
    alert("Checked In!");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, jonas);
console.log(flight); //WS234
console.log(jonas);
