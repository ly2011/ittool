/**
 *
 * @desc 根据对象路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
 * @param {Object} obj 要检索的对象
 * @param {Array|String} path 要获取的对象路径
 * @param {*} defaultValue 如果解析值是 undefined，这值会被返回
 * @returns {*} 返回解析的值
 *
 * @example
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get (obj, path, defaultValue = undefined) {
  if (!obj) return defaultValue
  if (Array.isArray(path)) path = path.join('.')
  return String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue), obj)
}

module.exports = get
