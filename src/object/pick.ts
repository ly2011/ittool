/**
 * 创建一个从 object 中选中的属性的对象
 * @param {Object} obj 来源对象
 * @param {Array|String} keys 要选中的属性名，单独指定或指定在数组中
 * @returns {Object}
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
interface objProp {
  [key: string]: string
}
function pick(obj: objProp, keys: string[] | string) {
  if (!obj) return obj
  if (!keys) return obj
  if (!Array.isArray(keys)) {
    keys = [keys]
  }
  const tmpObj: objProp = {}
  for (const key in obj) {
    if (keys.includes(key)) {
      tmpObj[key] = JSON.parse(JSON.stringify(obj[key]))
    }
  }

  return tmpObj
}

// module.exports = pick
export default pick
