/**
 *
 * @desc 判断`obj`是否为空
 * @param {Object} obj
 * @returns {Boolean}
 * @example
 * _.isEmptyObject({}) // => true
 */
interface objProp {
    [key: string]: string;
}
declare function isEmptyObject(obj: objProp): boolean;
export default isEmptyObject;
