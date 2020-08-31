const repeatNumbers = function (data) {
  // Put your solution here

  // console.log(data);

  for (let y = 0; y < data.length; y++) {
    // console.log(data[y]);

    for (let x = 0; x < data[y].length; x++) {
      console.log(data[y][x]);
    }
  }
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
