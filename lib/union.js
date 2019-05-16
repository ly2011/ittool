'use strict';

// https://segmentfault.com/q/1010000000141170
/**
 * 多个数组取并集 | 数组去重
 * @param  {Array} ...arr 可传入 1 个或多个数组
 * @returns {Array}
 * @example
 * _.union([1, 3, 2, 2, 1]) // => [1, 3, 2]
 * _.union([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c']) // => [1, 'a', 3, 4, 'b', 2, 'c']
 *
 */
function union() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    // 先合并所有数组
    var totalArr = Array.prototype.concat.apply([], arr);
    // 再对数组元素进行去重(无法解析es7的数组解构)
    // return [...new Set(totalArr)]
    return Array.from(new Set(totalArr));
}

module.exports = union;
