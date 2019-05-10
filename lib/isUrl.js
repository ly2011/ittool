'use strict';

/**
 *
 * @desc   判断是否为URL地址(存在缺陷，邮箱也会变为js)
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

module.exports = isUrl;
