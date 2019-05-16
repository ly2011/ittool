'use strict';

// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
function toLocaleStringSupportsOptions() {
    return !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');
}
/**
 *
 * @desc  特殊符号分割金额数字
 * @param {Number} amount 金额
 * @param {Object} options 金额格式化的其他参数
 * @param {String} locales (如果locale为undefined (上例中为en-US)，则默认值为系统的locale，即navigator.language)
 * @return {String} 格式化后的金额
 */
function formatMoney(amount, options, locales) {
    if (options === void 0) { options = {}; }
    if (locales === void 0) { locales = 'zh-CN'; }
    var defaultOptions = {
        style: 'decimal',
        currency: 'CNY',
        useGrouping: false,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 // 使用的小数位数的最大数目
    };
    // 无法解析es7的扩展运算符
    // options = { ...defaultOptions, ...options }
    options = Object.assign({}, defaultOptions, options);
    if (toLocaleStringSupportsOptions()) {
        // Create our number formatter.
        var formatter = new Intl.NumberFormat(locales, options);
        return formatter.format(amount);
    }
    else {
        return amount.toLocaleString(locales, options);
    }
}

module.exports = formatMoney;
