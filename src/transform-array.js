const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } else {
  const resultArr = arr.reduce((accumulator, item, index) => {
    if (arr[index - 1] === '--discard-next') {
      return accumulator;
    };
    if (arr[index - 1] === '--double-next') {//if [i-1] incl str, ->push additional [i]
      accumulator.push(arr[index]);
    };
    if (arr[index + 1] === '--discard-prev') {//if [i+1] incl str, ->delete [i+1]
      return accumulator;
    };
    if (arr[index + 1] === '--double-prev') {//if [i+1] incl str, ->push additional [i]
      accumulator.push(arr[index]);
    };

    if (item === '--discard-next' || item === '--double-next' || item === '--double-prev' || item === '--discard-prev') {
      return accumulator;//return accumulator in case of str
    };

    accumulator.push(arr[index]);

    return accumulator;
  }, []);

  return resultArr;
};

}

module.exports = {
  transform
};
