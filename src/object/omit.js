/**
 * 返回忽略属性之外的自身和继承的可枚举属性
 * @param {Object} obj 来源对象
 * @param {Array|String} keys 要被忽略的属性，单独指定或指定在数组中
 * @returns {Object}
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
function omit (obj, keys) {
  if (!obj) return obj
  if (!keys) return obj
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  const tmpObj = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      tmpObj[key] = JSON.parse(JSON.stringify(obj[key]))
    }
  }

  return tmpObj
}

module.exports = omit
