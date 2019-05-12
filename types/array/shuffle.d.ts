/**
 * https://bost.ocks.org/mike/shuffle/compare.html
 * @desc 打乱一个数组的顺序
 * @param {Array} arr
 * @return {Array}
 * @example
 * _.shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
declare function shuffle<T>(arr: T[]): T[];
export default shuffle;
