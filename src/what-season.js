const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (typeof date !== typeof new Date()) {
    throw Error ('Incorrect date')
  }
  let str = '';
  let num = Date.prototype.getMonth.call(date);
  switch(String(num)) {
    case '0':
    case '1':
    case '11':
      str = 'winter';
      break;
    case '2':
    case '3':
    case '4':
      str = 'spring';
      break;
    case '5':
    case '6':
    case '7':
      str = 'summer';
      break;
    case '8':
    case '9':
    case '10':
      str = 'autumn';
      break;
    default:
      str = 'Unable to determine the time of year!';
      break;
  }
  return str
};