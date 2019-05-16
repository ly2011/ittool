const isLeapYear = require('./isLeapYear')

/**
 * @desc 获取一年内的天数
 * @param {Number} year 年份
 * @return {Number} 闰年返回366,平年返回365
 */
function getDayCountOfYear(year: number): number {
  return isLeapYear(year) ? 366 : 365
}

module.exports = getDayCountOfYear
