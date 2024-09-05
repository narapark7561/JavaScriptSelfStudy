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
