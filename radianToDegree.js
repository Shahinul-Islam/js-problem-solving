// Problem:1  radianToDegree

function radianToDegree(radian) {
  //error handling
  if (typeof radian !== "number") {
    return "Please input any valid number..";
  } else {
    const output = radian * (180 / Math.PI);
    return output.toFixed(2);
  }
}
