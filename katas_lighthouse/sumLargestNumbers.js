const sumLargestNumbers = function (data) {
  // Put your solution here

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum += data[i];
    // console.log(sum);
  }

  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
