const camelCase = function (input) {
  // Your code here

  let array = input.split(" ");
  let answer = "";

  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      answer += array[i].charAt(0).toUpperCase();
    } else {
      answer += array[i].charAt().toLowerCase();
    }

    answer += array[i].substring(1);
  }
  return answer;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
