/**
 *
 * @desc  特殊符号分割金额数字
 * @param {Number} amount 金额
 * @param {Object} options 金额格式化的其他参数
 * @param {String} locales (如果locale为undefined (上例中为en-US)，则默认值为系统的locale，即navigator.language)
 * @return {String} 格式化后的金额
 */
declare function formatMoney(amount: number, options?: object, locales?: string): string;
export default formatMoney;
