/**
 * 返回忽略属性之外的自身和继承的可枚举属性
 * @param {Object} obj 来源对象
 * @param {Array|String} keys 要被忽略的属性，单独指定或指定在数组中
 * @returns {Object}
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
interface objProp {
    [key: string]: string;
}
declare function omit(obj: objProp, keys: string[] | string): objProp;
export default omit;
