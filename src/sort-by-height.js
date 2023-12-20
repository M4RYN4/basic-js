const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //1
  // const arrSorted = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  // let i = 0;
  // let resultArr = arr.map((item) => {
  //   if (item === -1) {//leave as is
  //     return item;
  //   } else {
  //     return arrSorted[i++];//increase
  //   }
  // });

  // return resultArr;
 //2
  const arrSorted = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let resultArr = [];
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {//from original arr->leave as is
      resultArr.push(arr[i]);//& push
    } else {
      resultArr.push(arrSorted[idx]);//from sorted arr->
      idx++;
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};
