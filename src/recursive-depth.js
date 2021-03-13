const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let currentDepth = this.calculateDepth(item);
        if (currentDepth >= depth) {
          depth = currentDepth + 1;
        }
      }
    }
    return depth
  }
};