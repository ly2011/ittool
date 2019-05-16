'use strict';

var isTel = require('./isTel');
var isPhoneNum = require('./isPhoneNum');
/**
 *
 * @desc  判断是否是座机或手机号码
 * @param {String|Number} str
 * @return {Boolean}
 */
function isPhoneOrTel(str) {
    return (typeof str !== 'number' && isTel(str)) || isPhoneNum(str);
}
module.exports = isPhoneOrTel;
