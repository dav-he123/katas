// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  // Code here!

  let volumeSphere = (4 / 3) * PI * Math.pow(radius, 3);

  return volumeSphere;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!

  let volumeCone = (1 / 3) * height * PI * Math.pow(radius, 2);

  return volumeCone;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!

  let volumePrism = height * width * depth;

  return volumePrism;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!

  let totalVolumeSphere = 0;
  let totalVolumeCone = 0;

  for (const element of solids) {
    if ((element.type = "sphere")) {
      totalVolumeSphere += sphereVolume(element.radius);
    } else if ((element.type = "cone")) {
      totalVolumeCone += coneVolume(element.radius, element.height);
    }
  }
  return (totalVolumeFinal = totalVolumeSphere + totalVolumeCone);
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
