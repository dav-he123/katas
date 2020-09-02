const calculateChange = function (total, cash) {
  // Your code here

  let changeInCents = cash - total;
  let finalAnswer = {};
  let remainder1 = 0;
  let numberOfTwentyDollars = changeInCents / 2000;
  if (changeInCents >= 2000) {
    remainder1 += changeInCents % 2000;
  } else {
    remainder1 === 0;
  }
  if (Math.trunc(numberOfTwentyDollars) !== 0) {
    let twentyDollars = Math.trunc(numberOfTwentyDollars);
    finalAnswer["twentyDollar"] = twentyDollars;
  }

  let remainder2 = 0;
  let remainder3 = 0;

  if (Math.trunc(numberOfTwentyDollars) === 0) {
    let numberOfTenDollars = changeInCents / 1000;
    let tenDollars = Math.trunc(numberOfTenDollars);

    finalAnswer["tenDollar"] = tenDollars;

    if (remainder1 >= 1000) {
      remainder2 += remainder1 % 1000;
    } else {
      remainder2 += 0;
    }

    if (tenDollars === 0) {
      let numberOfFiveDollars = changeInCents / 500;
      let fiveDollars = Math.trunc(numberOfFiveDollars);

      finalAnswer["fiveDollar"] = fiveDollars;

      if (remainder2 >= 500) {
        remainder3 += remainder2 % 500;
      } else {
        remainder3 += 0;
      }
    }
  }

  let numberOfTwoDollars = remainder3 / 200;
  let twoDollars = Math.trunc(numberOfTwoDollars);

  finalAnswer["twoDollar"] = twoDollars;

  // let numberOfQuarterDollars = changeInCents / 25;

  // if (Math.trunc(numberOfQuarterDollars) % 4 === 0) {
  //   let numberOfOneDollars = changeInCents / 100;

  //   if (Math.trunc(numberOfOneDollars) % 2 !== 0) {
  //     let oneDollars =
  //       Math.trunc(numberOfOneDollars) - (Math.trunc(numberOfOneDollars) - 1);
  //     finalAnswer["oneDollar"] = oneDollars;
  //   }
  // }

  return finalAnswer;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
