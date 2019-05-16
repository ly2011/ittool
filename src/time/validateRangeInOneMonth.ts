const isDate = require('./isDate')

/**
 * @desc 判断两个日期是否在同一个月内
 * @param {Date} start 开始日期
 * @param {Date} end 结束日期
 * @return {Boolean}
 */
function validateRangeInOneMonth(start: Date, end: Date): boolean {
  if (!isDate(start) || !isDate(end)) return false
  return start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()
}

// module.exports = validateRangeInOneMonth
export default validateRangeInOneMonth
