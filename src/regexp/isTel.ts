/**
 * @desc  判断是否为座机
 * @param {String} str
 * @return {Boolean}
 */
function isTel(str: string): boolean {
  return /^\d{3,4}-\d{7,8}$/.test(str)
}

export default isTel
