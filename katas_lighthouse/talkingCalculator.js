const talkingCalendar = function (date) {
  // Your code here

  let array = date.split("/");

  let answer = "";

  for (let i = 0; i < date.length; i++) {
    if (i === 1) {
      if (array[i] === "12") {
        answer += "December" + " ";
      }
    } else if (i === 2) {
      if (array[i] === "02") {
        answer += "2" + ", ";
      }
    }
  }

  for (let j = 0; j < date.length; j++) {
    if (j === 0) {
      answer += array[j];
    }
  }

  return answer;
};

console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));
