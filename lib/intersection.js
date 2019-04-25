/**
 *
 * @desc  数组取交集(即取既在 arr1 中存在, 又在 arr2 中存在的值)
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
function intersection (arr1, arr2) {
  const s = new Set(arr2)
  return arr1.filter(x => s.has(x))
}

module.exports = intersection
