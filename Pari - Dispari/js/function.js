function getRndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isPariOrDispari(CheckNumber) {
  let result = "";
  if (CheckNumber % 2 === 0) {
    result = "pari";
  } else {
    result = "dispari";
  }
  return result;
}
