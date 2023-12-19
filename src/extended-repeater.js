const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //1 str(STRING) +
  //2. Obj options: 1.options.addition (PLUS) 2. options.additionRepeatTimes (3 times) 3. options.additionSeparator ('00')
  //4. options.separator ('+') 5. options.additionSeparator ('|')
  // str & obj -> str
  if (options.addition !== undefined){
      options.addition = '' + options.addition;//1.str PLUS
  }
  options.repeatTimes = options.repeatTimes || 1;//2. num 3
  options.additionRepeatTimes = options.additionRepeatTimes || 1;//3.str 'OO'
  options.separator = options.separator || '+';//4. str '+'
  options.additionSeparator = options.additionSeparator || '|';//5. str '|'

  let strTemp = '';
  for (let i = 1; i <= options.additionRepeatTimes; i++) {//default 1 up to 3
    if (options.addition) {//if have
      strTemp += options.addition;
    }
    if (i != options.additionRepeatTimes){//if dont'have
      strTemp += options.additionSeparator;
    }
  }

  let result = '';
  for (let i = 1; i <= options.repeatTimes; i++) {//default 1
    result += str + strTemp;
    if (i != options.repeatTimes) {
      result += options.separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
