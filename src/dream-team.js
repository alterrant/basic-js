const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let array = [];
    if (!Array.isArray(members)) return false;
    members.forEach(function(item) {
        if (typeof(item) === 'string') array.push(item.toUpperCase());
    })
    return array.map(function(name) {
        for( let i=0; i <= name.length; i++) {
            if (name[i] !== ' ') return ('' + name[i]);
        } return name[0];
    }).sort().join('');
};