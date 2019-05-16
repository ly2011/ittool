'use strict';

/**
 *
 * @desc  判断是否为同一天
 * @param {Date} date1
 * @param {Date} date2
 * @return {Boolean}
 */
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        return false;
    }
    try {
        var date1_year = date1.getFullYear();
        var date1_month = date1.getMonth() + 1;
        var date1_date = date1.getDate();
        var date2_year = date2.getFullYear();
        var date2_month = date2.getMonth() + 1;
        var date2_date = date2.getDate();
        return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;
    }
    catch (error) {
        return false;
    }
}

module.exports = isSameDay;
