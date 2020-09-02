const calculateChange = function (total, cash) {
  // Your code here

  let changeInCents = cash - total;
  let finalAnswer = {};

  let remainder1 = 0;

  if (changeInCents >= 2000) {
    remainder1 += changeInCents % 2000;
  }
  if (changeInCents >= 1000 && changeInCents <= 2000) {
    remainder1 += changeInCents % 1000;
  }
  if (changeInCents >= 500 && changeInCents <= 1000) {
    remainder1 += changeInCents % 500;
  }
  if (changeInCents >= 200 && changeInCents <= 500) {
    // remainder1 += changeInCents % 200;
    // console.log(changeInCents);
    let numberOfTwoDollars = changeInCents / 200;
    let twoDollars = Math.trunc(numberOfTwoDollars);

    finalAnswer["twoDollar"] = twoDollars;
  }

  let numberOfTwentyDollars = changeInCents / 2000;

  if (Math.trunc(numberOfTwentyDollars) !== 0) {
    let twentyDollars = Math.trunc(numberOfTwentyDollars);
    finalAnswer["twentyDollar"] = twentyDollars;
  }

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

  if (changeInCents >= 200 && changeInCents <= 500) {
    // remainder1 += changeInCents % 200;
    // console.log(changeInCents);
    let numberOfTwoDollars = changeInCents / 200;
    let twoDollars = Math.trunc(numberOfTwoDollars);

    finalAnswer["twoDollar"] = twoDollars;
  }

  if (changeInCents >= 100 && changeInCents <= 200) {
    // remainder1 += changeInCents % 200;
    // console.log(changeInCents);
    let numberOfOneDollars = changeInCents / 100;
    let oneDollars = Math.trunc(numberOfOneDollars);

    finalAnswer["oneDollar"] = oneDollars;
  }

  if (changeInCents >= 25 && changeInCents <= 100) {
    // remainder1 += changeInCents % 200;
    // console.log(changeInCents);
    let numberOfQuarterDollars = changeInCents / 200;
    let quarterDollars = Math.trunc(numberOfQuarterDollars);

    finalAnswer["quarterDollar"] = quarterDollars;
  }

  if (changeInCents >= 10 && changeInCents <= 25) {
    // remainder1 += changeInCents % 200;
    // console.log(changeInCents);
    let numberOfQuarterDollars = changeInCents / 200;
    let quarterDollars = Math.trunc(numberOfQuarterDollars);

    finalAnswer["quarterDollar"] = quarterDollars;
  }

  // let numberOfTwoDollars = remainder1 / 200;
  // let twoDollars = Math.trunc(numberOfTwoDollars);

  // finalAnswer["twoDollar"] = twoDollars;

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

// console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
