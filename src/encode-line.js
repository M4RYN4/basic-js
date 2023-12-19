const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;//default val
  let result = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i + 1]){//if match -> next count ==2
      count++;
    } else {//if next str[i + 1] doesn't match:
      result += (count > 1 ? count : '') + str[i];
      count = 1;//reset default val back to 1
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
