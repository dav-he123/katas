const organizeInstructors = function (instructors) {
  // Put your solution here

  let finalObj = {};
  let finalArray = [];

  for (let elem of instructors) {
    for (let obj in elem) {
      finalObj[elem.couse] = finalArray;
    }
    finalObj[elem.couse] = finalArray;
  }

  // for (let elem of instructors) {
  //   finalArray.push(elem.name);
  //   finalObj[elem.course] = finalArray;
  // }

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
