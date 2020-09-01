const multiplicationTable = function (maxValue) {
  // Your code here

  let answer = "";

  for (let i = 0; i < maxValue; i++) {
    for (let count = 1; count < maxValue; count++) {
      answer += maxValue * count + " ";
    }
  }

  return answer;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
