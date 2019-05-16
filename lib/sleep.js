'use strict';

/**
 *
 * @desc  延时执行
 * @param {Number} second
 */
function sleep(second) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, second);
    });
}

module.exports = sleep;
