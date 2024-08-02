
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const showForecast = function (array) {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    str = str + `${array[i]} in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

showForecast(temp1);