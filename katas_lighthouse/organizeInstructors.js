const organizeInstructors = function (instructors) {
  // Put your solution here

  let finalObj = {};
  let firstArray = [];
  let secondArray = [];

  instructors.forEach(function (element) {
    if (element.course === "Web") {
      firstArray.push(element.name);
      finalObj[element.course] = firstArray;
    } else if (element.course === "iOS") {
      secondArray.push(element.name);
      finalObj[element.course] = secondArray;
    }
  });

  return finalObj;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

// console.log(
//   organizeInstructors([
//     { name: "Brendan", course: "Blockchain" },
//     { name: "David", course: "Web" },
//     { name: "Martha", course: "iOS" },
//     { name: "Carlos", course: "Web" },
//   ])
// );
