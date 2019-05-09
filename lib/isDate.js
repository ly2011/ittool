/**
 * https://stackoverflow.com/questions/7445328/check-if-a-string-is-a-date-value
 * @desc 判断是否为合法的日期
 * @param {Date|Number|String} date
 * @return {Boolean}
 */
function isDate (date) {
  if (date === null || date === undefined) return false
  return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date))
}

module.exports = isDate
