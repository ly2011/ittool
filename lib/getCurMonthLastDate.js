'use strict';

/**
 *
 * @desc  获取日期本月份的最后一天
 * @param {Date|String|Number} date
 * @return {Date}
 * @example getCurMonthLastDate(new Date('2019/01/01')) // new Date('2019/01/31')
 */
function getCurMonthLastDate(date) {
  const newData = new Date(+date);
  newData.setDate(1);
  newData.setMonth(newData.getMonth() + 1);
  newData.setDate(newData.getDate() - 1);
  newData.setHours(0);
  newData.setMinutes(0);
  newData.setSeconds(0);
  newData.setMilliseconds(0);
  return newData;
}

module.exports = getCurMonthLastDate;
