'use strict';

/**
 *
 * @desc  延时执行
 * @param {Number} second
 */
function sleep(second) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, second);
  });
}

module.exports = sleep;
