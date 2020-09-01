const talkingCalendar = function (date) {
  // Your code here

  let array = date.split("/");

  let answer = "";

  for (let i = 0; i < date.length; i++) {
    if (i === 1) {
      if (array[i] === "01") {
        answer += "January" + " ";
      } else if (array[i] === "02") {
        answer += "February" + " ";
      } else if (array[i] === "03") {
        answer += "March" + " ";
      } else if (array[i] === "04") {
        answer += "April" + " ";
      } else if (array[i] === "05") {
        answer += "May" + " ";
      } else if (array[i] === "06") {
        answer += "June" + " ";
      } else if (array[i] === "07") {
        answer += "July" + " ";
      } else if (array[i] === "08") {
        answer += "August" + " ";
      } else if (array[i] === "09") {
        answer += "September" + " ";
      } else if (array[i] === "10") {
        answer += "October" + " ";
      } else if (array[i] === "11") {
        answer += "November" + " ";
      } else if (array[i] === "12") {
        answer += "December" + " ";
      }
    } else if (i === 2) {
      if (array[i] === "01") {
        answer += "1" + ", ";
      } else if (array[i] === "02") {
        answer += "2" + ", ";
      } else if (array[i] === "03") {
        answer += "3" + ", ";
      } else if (array[i] === "04") {
        answer += "4" + ", ";
      } else if (array[i] === "05") {
        answer += "5" + ", ";
      } else if (array[i] === "06") {
        answer += "6" + ", ";
      } else if (array[i] === "07") {
        answer += "7" + ", ";
      } else if (array[i] === "08") {
        answer += "8" + ", ";
      } else if (array[i] === "09") {
        answer += "9" + ", ";
      } else if (array[i] > 9) {
        answer += array[i] + ", ";
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
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
