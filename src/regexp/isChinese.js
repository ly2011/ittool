/**
 * 判断是否包含中文
 * @param {String} str
 * @return {Boolean}
 */
function isChinese (str) {
  if (!str) return false
  const reg = /[\u4E00-\u9FA5]/
  return reg.test(str)
}
module.exports = isChinese
