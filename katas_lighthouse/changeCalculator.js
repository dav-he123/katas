const calculateChange = function (total, cash) {
  // Your code here

  let changeInCents = cash - total;
  let total1 = 0;
  let finalAnswer = {};

  let numberOfTwentyDollars = changeInCents / 2000;
  // console.log(numberOfTwentyDollars);
  if (Math.trunc(numberOfTwentyDollars) !== 0) {
    // console.log(numberOfTwentyDollars);
    let twentyDollars = Math.trunc(numberOfTwentyDollars);
    total1 += changeInCents - twentyDollars * 2000;
    finalAnswer["twentyDollar"] = twentyDollars;
  }

  let numberOfTenDollars = changeInCents / 1000;

  if (Math.trunc(numberOfTwentyDollars) === 0) {
    // console.log(numberOfTenDollars);
    let tenDollars = Math.trunc(numberOfTenDollars);

    if (tenDollars !== 0) {
      total1 += changeInCents - tenDollars * 1000;

      finalAnswer["tenDollar"] = tenDollars;
    } else if (tenDollars === 0) {
      let numberOfFiveDollars = changeInCents / 500;

      let fiveDollars = Math.trunc(numberOfFiveDollars);

      total1 += changeInCents - fiveDollars * 500;

      finalAnswer["fiveDollar"] = fiveDollars;
    }
  }

  //////////////////////////////////////////////////////////////

  let numberOfTwoDollars = total1 / 200;
  let total2 = 0;

  if (Math.trunc(numberOfTwoDollars) !== 0) {
    let twoDollars = Math.trunc(numberOfTwoDollars);
    total2 += total1 - twoDollars * 200;
    finalAnswer["twoDollar"] = twoDollars;
  }

  let numberOfOneDollars = total2 / 100;
  // console.log(total2);
  let total3 = 0;

  let oneDollars = Math.trunc(numberOfOneDollars);
  total3 += total2 - oneDollars * 100;
  finalAnswer["oneDollar"] = oneDollars;

  console.log(total3);

  let numberOfQuarterDollars = total3 / 25;
  let total4 = 0;

  let quarterDollars = Math.trunc(numberOfQuarterDollars);
  total4 += total3 - quarterDollars * 25;
  finalAnswer["quarterDollar"] = quarterDollars;

  console.log(total4);

  let numberOfDimeDollars = total4 / 10;
  let total5 = 0;

  let dimeDollars = Math.trunc(numberOfDimeDollars);
  total5 += total4 - dimeDollars * 10;
  finalAnswer["dimeDollar"] = dimeDollars;

  let numberOfNickelDollars = total5 / 5;
  let total6 = 0;

  let nickelDollars = Math.trunc(numberOfNickelDollars);
  total6 += total5 - nickelDollars * 5;
  finalAnswer["nickelDollar"] = nickelDollars;

  let numberOfPennyDollars = total6 / 1;

  let pennyDollars = Math.trunc(numberOfPennyDollars);
  finalAnswer["pennyDollar"] = pennyDollars;

  return finalAnswer;
};

console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
// console.log(calculateChange(0, 5));
