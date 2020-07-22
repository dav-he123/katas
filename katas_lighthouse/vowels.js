const numberOfVowels = function (data) {
  // Put your solution here

  let sum = 0;

  const result = data.split("");

  // console.log(result);

  for (let i = 0; i < result.length; i++) {
    if (
      result[i] === "a" ||
      result[i] === "e" ||
      result[i] === "i" ||
      result[i] === "o" ||
      result[i] === "u"
    ) {
      sum += 1;
    } else {
      sum += 0;
    }
  }

  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
