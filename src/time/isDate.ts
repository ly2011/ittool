/**
 * https://stackoverflow.com/questions/7445328/check-if-a-string-is-a-date-value
 * @desc 判断是否为合法的日期
 * @param {Number|String|Date} date
 * @return {Boolean}
 */
function isDate(date: number | string | Date): boolean {
  if (date === null || date === undefined) return false
  return new Date(date).toString() === 'Invalid Date' && !Number.isNaN(new Date(date).getTime())
}

// module.exports = isDate
export default isDate
