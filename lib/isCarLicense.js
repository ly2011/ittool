'use strict';

/**
 * @desc 判断是否合法车牌号
 * @param {String} license 车牌号码
 * @return {Boolean}
 */
function isCarLicense(license) {
  if (!license) return false; // 普通汽车

  var ordinaryCarReg = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}/; // 新能源汽车

  var newEnergyCarReg = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;
  return ordinaryCarReg.test(license) || newEnergyCarReg.test(license);
}

module.exports = isCarLicense;
