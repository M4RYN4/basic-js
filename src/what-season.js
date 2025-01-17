const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
 //getTime() returns the number of milliseconds since January 1, 1970
  try {
    date.getTime();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  //from 0 to 11
  let m = date.getMonth() + 1;
  if ((1 <= m && m <= 2) || m === 12) {
    return "winter";
  }
  if (3 <= m && m <= 5){
    return "spring";
  }
  if (6 <= m && m <= 8) {
    return "summer";
  }
  if (9 <= m && m <= 11) {
    return "autumn";
  }
}

module.exports = {
  getSeason
};
