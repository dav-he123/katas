const urlDecode = function (text) {
  // Put your solution here

  let finalObj = {};

  let answer = text.split("=");

  let convert = text.split("%");

  console.log(answer);

  console.log(convert);

  // finalObj[answer[0]] = answer[1];

  // console.log(finalObj);
  // return finalObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
