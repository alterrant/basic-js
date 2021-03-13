const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(function(item) {
    if (item.includes('^^')) {
      item.forEach(function(cats) {
        if (cats === '^^') count++;
      })
    };
  })
  return count;
};
