const multiplicationTable = function (maxValue) {
  // Your code here

  let answer = "";

  if (maxValue > 1) {
    for (let i = 1; i <= maxValue; i++) {
      answer += i * (maxValue - (maxValue - 1)) + " ";
    }
  } else {
    for (let i = 1; i <= maxValue; i++) {
      answer += maxValue * i + " ";
    }
  }
  return answer;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
