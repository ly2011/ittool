// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

function toLocaleStringSupportsOptions () {
  return !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function')
}
/**
 *
 * @desc  特殊符号分割金额数字
 * @param {Number|String} amount 金额
 * @param {Object} options 金额格式化的其他参数
 * @param {String} locales (如果locale为undefined (上例中为en-US)，则默认值为系统的locale，即navigator.language)
 * @return {String} 格式化后的金额
 */
function formatMoney (amount, options = {}, locales = 'zh-CN') {
  const defaultOptions = {
    style: 'decimal', // 格式化时使用的样式.可能的值有“decimal”表示纯数字格式 , “currency”表示货币格式, 和"percent"表示百分比格式
    currency: 'CNY', // 在货币格式化中使用的货币符号
    useGrouping: false, // 是否使用分组分隔符
    minimumFractionDigits: 2, // 使用的小数位数的最小数目
    maximumFractionDigits: 2 // 使用的小数位数的最大数目
  }
  options = { ...defaultOptions, ...options }
  if (toLocaleStringSupportsOptions()) {
    // Create our number formatter.
    var formatter = new Intl.NumberFormat(locales, options)

    return formatter.format(amount)
  } else {
    return amount.toLocaleString(locales, options)
  }
}

module.exports = formatMoney
