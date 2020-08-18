const instructorWithLongestName = function (instructors) {
  // for (let key of Object.values(instructors)) {
  //   console.log(key.name.split("").length);
  // }

  let longestName = instructors.sort(function (a, b) {
    return b.name.length - a.name.length;
  });

  return longestName[0];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
