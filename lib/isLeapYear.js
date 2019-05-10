'use strict';

/**
 *
 * @desc  判断指定年份是否是闰年
 * @param {Number} year 要判断的年份
 * @return {Boolean}  如果年份是闰年，则返回 true, 否则返回 false
 */
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

module.exports = isLeapYear;
