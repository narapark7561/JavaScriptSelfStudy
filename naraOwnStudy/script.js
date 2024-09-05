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
    return [this.mainMenu[mainNumber], this.dessertMenu[dessertNumber]];
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
