const repeatNumbers = function (data) {
  // Put your solution here

  // let finalArray = [];
  let output = " ";

  // for (let y = 0; y < data.length; y++) {
  //   // console.log(data[y]);
  //   for (let x = 0; x < data[y].length; x++) {
  //     // console.log(data[y][1]);
  //     for (let i = data[y][1]; i > 0; i--) {
  //       finalArray.push(data[y][0]);
  //       if (i === 1 && y > data.length - 1) {
  //         finalArray.push(",");
  //       }
  //       // return finalArray.join("").toString("");
  //     }
  //     return finalArray.join("").toString("");
  //   }
  // }

  for (let y = 0; y < data.length; y++) {
    let a = data[y][0];
    let b = data[y][1];
    for (let x = b; x > 0; x--) {
      output += a;
      if (x === 1 && y < data.length - 1) {
        output += ", ";
      }
    }
  }
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
