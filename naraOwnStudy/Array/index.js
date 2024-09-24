// let arr = ["a", "b", "c", "d", "e"];

// // SLICE
// console.log(arr.slice(2)); // index 2숫자 자리부터 나오게 하는것 -> c, d, e가 나온다.
// console.log(arr.slice(2, 4)); // 2부터 4전에 자리가 나온다-> c,d
// console.log(arr.slice(-1));

// //SPLICE
// console.log(arr.splice(2)); // c,d,e -> but it's diffrent than SLICE because splice is get rid of elements and return it.
// console.log(arr.splice(-1)); //이게왜 b가나오냐면 위에서 cde를 제거했고 a,b만남은상태기때문에! 고로 이 다음은 a만남고 출력자체는 b가나온다

// CONCAT
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const letters = arr1.concat(arr2);
console.log(letters);
console.log(...arr1, ...arr2);

// JOIN
console.log(letters.join(" - "));
