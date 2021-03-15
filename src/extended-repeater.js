const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strArray = [];
  if(typeof str !== 'string') {
    str = '' + str;
  }
  if(!options.repeatTimes || isNaN(options.repeatTimes)) {
    options.repeatTimes = 1;
  }
  if(options.addition !== undefined && typeof options.addition !== 'string') {
    options.addition = '' + options.addition;
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    strArray.push(str);
    if(!options.additionRepeatTimes || isNaN(options.additionRepeatTimes)) {
      options.additionRepeatTimes = 1;
    }
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      options.addition && strArray.push(options.addition);
      if(j !== options.additionRepeatTimes - 1) {
        options.additionSeparator ? strArray.push(options.additionSeparator) : strArray.push('|');
      }
    }
    if(i !== options.repeatTimes - 1) {
      options.separator ? strArray.push(options.separator) : strArray.push('+');
    }

  }
  return strArray.join('');
};