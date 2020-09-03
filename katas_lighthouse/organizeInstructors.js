const organizeInstructors = function (instructors) {
  // Put your solution here

  let finalObj = {};
  // let firstArray = [];
  // let secondArray = [];

  // instructors.forEach(function (element) {
  //   if (element.course === "Web") {
  //     firstArray.push(element.name);
  //     finalObj[element.course] = firstArray;
  //   } else if (element.course === "iOS") {
  //     secondArray.push(element.name);
  //     finalObj[element.course] = secondArray;
  //   }
  // });

  for (const elem of instructors) {
    finalObj[elem.course] = [];
  }

  // console.log(finalObj);

  for (const student of instructors) {
    // console.log(student);
    // console.log(finalObj);
    finalObj[student.course].push(student.name);
    // console.log(finalObj[student.course]);
    // console.log("AAAAAAAAAAA");
    // console.log(finalObj[student.course]);
    // console.log(student.name);
  }

  return finalObj;
};

console.log(
  organizeInstructors([
    { name: "Victoria", course: "Web" },
    { name: "Samuel", course: "iOS" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
