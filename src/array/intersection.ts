/**
 *
 * @desc  数组取交集(即取既在 arr1 中存在, 又在 arr2 中存在的值)
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 * @example
 * _.intersection([1, 2, 'a', 1], [4, 2, 'a']) // => [ 2, 'a']
 */
function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const s = new Set(arr2)
  return arr1.filter(x => s.has(x))
}

// module.exports = intersection
export default intersection
