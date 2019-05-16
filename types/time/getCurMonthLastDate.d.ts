/**
 *
 * @desc  获取日期本月份的最后一天
 * @param {Date|String|Number} date
 * @return {Date}
 * @example getCurMonthLastDate(new Date('2019/01/01')) // new Date('2019/01/31')
 */
declare function getCurMonthLastDate(date: number | string | Date): Date;
export default getCurMonthLastDate;
