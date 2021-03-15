const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
        let tArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === '--discard-next') {
                if(i === arr.length-1) {
                    continue;
                };
                tArr.push(null);
                i = i+1;
                continue;
            } else if(arr[i] === '--discard-prev') {
                if(i === 0) {
                    continue;
                }
                tArr.pop();
                continue;
            } else if(arr[i] === '--double-next') {
                if(i === arr.length-1) {
                    continue;
                }
                tArr.push(arr[i+1]);
                continue;
            } else if(arr[i] === '--double-prev') {
                if(i === 0) {
                    continue;
                }
                tArr.push(tArr[tArr.length-1]);
                continue;
            }
            tArr.push(arr[i]);
        }
        function isNull(item) {
            return item !== null;
        }
        return tArr.filter(isNull);
    };

