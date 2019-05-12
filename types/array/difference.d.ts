/**
 *
 * @desc  数组取差集(即取 arr1 中存在, arr2 中不存在的值)
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 * @example
 * _.difference([1,2,3], [1,2,4]) -> [3]
 */
declare function difference<T>(arr1: T[], arr2: T[]): T[];
export default difference;
