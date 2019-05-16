'use strict';

// https://github.com/chenhuiYj/ec-do/blob/master/src/ec-do-3.0.0-beta.2.js
// https://github.com/beezenD/clearlake/blob/master/components/format/index.tsx
var dateFormators = {
    __proto__: null,
    Y: function (date, format) {
        var year = date.getFullYear();
        return format.length < 3 ? year % 100 : year;
    },
    y: function (date, format) {
        var year = date.getFullYear();
        return format.length < 3 ? year % 100 : year;
    },
    M: function (date) { return date.getMonth() + 1; },
    D: function (date) { return date.getDate(); },
    d: function (date) { return date.getDate(); },
    H: function (date) { return date.getHours(); },
    m: function (date) { return date.getMinutes(); },
    s: function (date) { return date.getSeconds(); },
    e: function (date) { return '日一二三四五六'.charAt(date.getDay()); }
};
/**
 *  格式化日期对象
 * @param {String|Number|Date} date
 * @param {String} format
 * @return {String} 返回格式化后的字符串
 */
function formatDate(date, format) {
    if (date === void 0) { date = new Date(); }
    if (format === void 0) { format = 'YYYY-MM-DD HH:mm:ss'; }
    var isValid = new Date(date).toString() === 'Invalid Date';
    if (isValid)
        throw new TypeError('Offer an illegal value {date} to format');
    if (!isValid) {
        if (date && !(date instanceof Date)) {
            date = new Date(date);
        }
        if (!+date) {
            return '';
        }
        return format.replace(/([YyMDdHms])\1*/g, function (all, key) {
            key = dateFormators[key] ? dateFormators[key](date, all) + '' : '';
            while (key.length < all.length) {
                key = '0' + key;
            }
            return key;
        });
    }
    return '';
}

module.exports = formatDate;
