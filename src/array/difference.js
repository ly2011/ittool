/**
 *
 * @desc  数组取差集(即取 arr1 中存在, arr2 中不存在的值)
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function difference (arr1, arr2) {
  const s = new Set(arr2)
  return arr1.filter(x => !s.has(x))
}

module.exports = difference