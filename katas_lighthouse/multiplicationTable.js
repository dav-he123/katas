const multiplicationTable = function (maxValue) {
  // Your code here

  let answer = "";

  if (maxValue > 1) {
    for (let i = 1; i <= maxValue; i++) {
      for (let j = 1; j <= maxValue; j++)
        answer += i * (maxValue - (maxValue - j)) + " ";
      answer += "\n";
    }
  }

  if (maxValue === 1) {
    for (let i = 1; i <= maxValue; i++) {
      answer += maxValue * i + " ";
      answer += "\n";
    }
  }

  return answer;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
