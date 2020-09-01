const calculateChange = function (total, cash) {
  // Your code here

  let changeInCents = cash - total;
  let finalAnswer = {};

  let numberOfTenDollars = changeInCents / 1000;
  let A = Math.trunc(numberOfTenDollars);

  finalAnswer["tenDollar"] = A;

  if (A === 0) {
    let numberOfFiveDollars = changeInCents / 500;
    let B = Math.trunc(numberOfFiveDollars);

    finalAnswer["fiveDollar"] = B;
  } else if (B === 0) {
    let numberOfTwoDollars = changeInCents / 200;
    let C = Math.trunc(numberOfTwoDollars);

    finalAnswer["twoDollar"] = C;
  }

  let numberOfTwoDollars = changeInCents / 200;
  let C = Math.trunc(numberOfTwoDollars);

  finalAnswer["twoDollar"] = C;

  let numberOfOneDollars = changeInCents / 100;
  let D = Math.trunc(numberOfOneDollars);

  finalAnswer["oneDollar"] = D;

  return finalAnswer;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
