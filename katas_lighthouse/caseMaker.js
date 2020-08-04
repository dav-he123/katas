const camelCase = function (input) {
  // Your code here

  let output = " ";
  let editedText;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " " || input[i] === "-" || input[i] === "_") {
      output += input[i + 1].toUpperCase();
      editedText = i + 1;
    } else if (editedText !== i) {
      output += input[i].toLowerCase();
    }
  }

  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
