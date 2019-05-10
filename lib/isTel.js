'use strict';

/**
 * @desc  判断是否为座机
 * @param {String} str
 * @return {Boolean}
 */
function isTel(str) {
  return /^\d{3,4}-\d{7,8}$/.test(str);
}

module.exports = isTel;
