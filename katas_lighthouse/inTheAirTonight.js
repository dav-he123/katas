const checkAir = function (samples, threshold) {
  // Code here!
  let countDirty = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      countDirty += 1;
    }
  }

  // console.log(countDirty);
  console.log(samples.length);

  if (countDirty / samples.length < threshold) {
    return "clean";
  } else {
    return "polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
