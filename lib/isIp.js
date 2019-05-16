'use strict';

/**
 * @desc 判断是否是IP地址
 * @param {String} str ip地址
 * @return {Boolean}
 */
function isIp(str) {
    if (!str)
        return false;
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])((\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}|(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){5})$/;
    return reg.test(str);
}

module.exports = isIp;
