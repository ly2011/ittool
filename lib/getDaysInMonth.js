/**
 *
 * @desc  获取指定年的指定月的天数
 * @param {Number} year
 * @param {Number} month
 * @return {Number} 返回天数
 */
function getDaysInMonth (year, month) {
  year = parseInt(year, 10)
  month = parseInt(month, 10);
  const d = new Date(year, month, 0);
  return d.getDate();
}

module.exports = getDaysInMonth