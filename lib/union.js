'use strict';

// https://segmentfault.com/q/1010000000141170

/**
 * 多个数组取并集 | 数组去重
 * @param  {Array} ...arr 可传入 1 个或多个数组
 * @return {Array}
 */
function union(...arr) {
  // 先合并所有数组
  const totalArr = Array.prototype.concat.apply([], arr); // 再对数组元素进行去重(无法解析es7的数组解构)
  // return [...new Set(totalArr)]

  return Array.from(new Set(totalArr));
}

module.exports = union;
