const repeatNumbers = function (data) {
  // Put your solution here

  let finalArray = [];

  for (let y = 0; y < data.length; y++) {
    // console.log(data[y]);
    for (let x = 0; x < data[y].length; x++) {
      // console.log(data[y][1]);
      for (let i = 0; i < data[y][1]; i++) {
        finalArray.push(data[0][0]);
      }
      return finalArray;
    }
  }
};

console.log(repeatNumbers([[1, 10]]));
// console.log(
//   repeatNumbers([
//     [1, 2],
//     [2, 3],
//   ])
// );
// console.log(
//   repeatNumbers([
//     [10, 4],
//     [34, 6],
//     [92, 2],
//   ])
// );
