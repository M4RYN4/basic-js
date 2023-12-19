const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  //half-life time period formula: t1/2 = 0.693/k
  //λ=0.693/ T (1/2)   1 ln 2 T
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  if (sampleActivity <= 0 || sampleActivity > 15 || isNaN(sampleActivity)) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

  return t;
}

module.exports = {
  dateSample
};
