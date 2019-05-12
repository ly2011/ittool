/**
 *
 * @desc 判断`obj`是否为空
 * @param {Object} obj
 * @returns {Boolean}
 * @example
 * _.isEmptyObject({}) // => true
 */
interface objProp {
  [key: string]: string
}
function isEmptyObject(obj: objProp): boolean {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return false
  }
  return !Object.keys(obj).length
}

// module.exports = isEmptyObject
export default isEmptyObject
