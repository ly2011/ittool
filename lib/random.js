'use strict';

/**
 * @desc  产生一个包括 min 与 max 之间的数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return {Number} 返回随机数
 * @example
 * random(1, 5) // => 返回一个1-5之间的随机数
 */
function random(min, max) {
  if (min === undefined && max === undefined) {
    return 0;
  }

  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

module.exports = random;
