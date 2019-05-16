'use strict';

function omit(obj, keys) {
    if (!obj)
        return obj;
    if (!keys)
        return obj;
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    var tmpObj = {};
    for (var key in obj) {
        if (!keys.includes(key)) {
            tmpObj[key] = JSON.parse(JSON.stringify(obj[key]));
        }
    }
    return tmpObj;
}

module.exports = omit;
