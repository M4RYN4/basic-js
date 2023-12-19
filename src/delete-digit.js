const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
//1. num -> str
let numAsStr = n.toString();
let maxNum = Number(numAsStr[0]);//assign max to 1st

for (let i = 0; i < numAsStr.length; i++) {
  let currNumAsStr = numAsStr.slice(0, i) + numAsStr.slice(i + 1);
  let currNum = Number(currNumAsStr);

  if (currNum > maxNum) {
    maxNum = currNum;
  }
}

return maxNum;
}

module.exports = {
  deleteDigit
};
