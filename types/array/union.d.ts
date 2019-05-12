/**
 * 多个数组取并集 | 数组去重
 * @param  {Array} ...arr 可传入 1 个或多个数组
 * @returns {Array}
 * @example
 * _.union([1, 3, 2, 2, 1]) // => [1, 3, 2]
 * _.union([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) // => [1, 'a', 3, 4, 'b', 2, 'c']
 *
 */
declare function union<T>(...arr: T[]): T[];
export default union;
