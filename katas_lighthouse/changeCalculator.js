const calculateChange = function (total, cash) {
  // Your code here

  let changeInCents = cash - total;
  let finalAnswer = {};

  let numberOfTwentyDollars = changeInCents / 2000;
  let twentyDollars = Math.trunc(numberOfTwentyDollars);

  finalAnswer["twentyDollar"] = twentyDollars;

  if (Math.trunc(numberOfTwentyDollars) === 0) {
    let numberOfTenDollars = changeInCents / 1000;
    let tenDollars = Math.trunc(numberOfTenDollars);

    finalAnswer["tenDollar"] = tenDollars;

    if (tenDollars === 0) {
      let numberOfFiveDollars = changeInCents / 500;
      let fiveDollars = Math.trunc(numberOfFiveDollars);

      finalAnswer["fiveDollar"] = fiveDollars;
    }
  }

  let numberOfTwoDollars = changeInCents / 200;
  let twoDollars = Math.trunc(numberOfTwoDollars);

  finalAnswer["twoDollar"] = twoDollars;

  let numberOfQuarterDollars = changeInCents / 25;

  if (Math.trunc(numberOfQuarterDollars) % 4 === 0) {
    let numberOfOneDollars = changeInCents / 100;

    if (Math.trunc(numberOfOneDollars) % 2 !== 0) {
      let oneDollars =
        Math.trunc(numberOfOneDollars) - (Math.trunc(numberOfOneDollars) - 1);
      finalAnswer["oneDollar"] = oneDollars;
    }
  }

  return finalAnswer;
};

// console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
