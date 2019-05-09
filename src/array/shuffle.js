/**
 * https://bost.ocks.org/mike/shuffle/compare.html
 * @desc 打乱一个数组的顺序
 * @param {Array} arr
 * @return {Array}
 * @example  _.shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
function shuffle (arr) {
  if (!Array.isArray(arr)) return arr
  var m = arr.length
  var t
  var i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = arr[m]
    arr[m] = arr[i]
    arr[i] = t
  }
  return arr
}

module.exports = shuffle
