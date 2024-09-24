///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with 
the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, 
  increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense 
  (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string 
as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, 
using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 
'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0), //4칸이있는 array를 생성한뒤 각각 [0,0,0,0]으로하는것이다.
  registerNewAnswer(answer) {
    // answer = prompt(
    //   `${this.question}\n${this.options.join('\n')}\nWrite option number`
    // );
    // answer = parseInt(answer); //my code -> can use Number () so it convert to number
    answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\nWrite option number`
      )
    );
    if (answer != null && answer < this.answers.length) {
      this.answers[answer]++;
      alert(`You answer is ${this.options[answer]}. Thank you!`);
    } else {
      alert("Wrong choice, Please read option again and vote!");
    }
    this.displayResult("string");
    this.displayResult("array");
  },
  //   displayResult(result) {
  //     result = this.answers;
  //     alert(`Poll results are ${this.answers}`);
  //   }, //displayResult에서 어떤 타입의 answer인지보여줘야한다. //나의 answer

  displayResult(type = "array") {
    //default parameter
    if (type === "array") {
      //즉 유저가 보고싶은 아웃풋을 선택하는 꼴이됨.
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`); //answer sample 1
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
