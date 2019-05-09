/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 身份证号码
 * @return {Boolean}
 */
function isIdCard (str) {
  // 第二代身份证号码正则
  const secondIdNumberReg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  // 第一代身份证正则表达式(15位)
  const firstIdNumberReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
  return secondIdNumberReg.test(str) || firstIdNumberReg.test(str)
}

module.exports = isIdCard
