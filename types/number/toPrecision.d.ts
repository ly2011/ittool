/**
 * @desc  精确数值的方法
 * @param {Number}  num 数值
 * @param {Number}  precision 小数点后数字的个数
 * @returns {Number}
 * @example
 * toPrecision(1.3333335, 6) => 1.333334
 */
declare function toPrecision(num: number, precision?: number): number;
export default toPrecision;
