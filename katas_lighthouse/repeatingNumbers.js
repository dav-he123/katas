const repeatNumbers = function (data) {
  // Put your solution here

  let output = [];
  for (let i = 0; i < data.length; i++) {
    let a = data[i][0];
    let b = data[i][1];

    for (let j = b; j > 0; j--) {
      output += a;
      if (j === 1 && i < data.length - 1) {
        output += ", ";
      }
    }
  }
  // let array = [];

  // array.push(output);
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
