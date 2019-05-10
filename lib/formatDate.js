'use strict';

// https://github.com/chenhuiYj/ec-do/blob/master/src/ec-do-3.0.0-beta.2.js
// https://github.com/beezenD/clearlake/blob/master/components/format/index.tsx
const dateFormators = {
  __proto__: null,
  Y: (date, format) => {
    const year = date.getFullYear();
    return format.length < 3 ? year % 100 : year;
  },
  y: (date, format) => {
    const year = date.getFullYear();
    return format.length < 3 ? year % 100 : year;
  },
  M: date => date.getMonth() + 1,
  D: date => date.getDate(),
  d: date => date.getDate(),
  H: date => date.getHours(),
  m: date => date.getMinutes(),
  s: date => date.getSeconds(),
  e: date => '日一二三四五六'.charAt(date.getDay())
  /**
   *  格式化日期对象
   * @param {Date|String|Number} date
   * @param {String} format
   * @return {String} 返回格式化后的字符串
   */

};

function formatDate(date = new Date(), format = 'YYYY-MM-DD HH:mm:ss') {
  const isValid = new Date(date).toString() === 'Invalid Date';
  if (isValid) throw new TypeError('Offer an illegal value {date} to format');

  if (!isValid) {
    if (date && !(date instanceof Date)) {
      date = new Date(date);
    }

    if (!+date) {
      return '';
    }

    return format.replace(/([YyMDdHms])\1*/g, (all, key) => {
      key = dateFormators[key](date, all) + '';

      while (key.length < all.length) {
        key = '0' + key;
      }

      return key;
    });
  }

  return '';
}

module.exports = formatDate;
