'use strict';

function get(obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (!obj)
        return defaultValue;
    if (Array.isArray(path))
        path = path.join('.');
    return String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(function (a, c) { return (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue); }, obj);
}

module.exports = get;
