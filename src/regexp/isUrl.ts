/**
 *
 * @desc   判断是否为URL地址(TODO:存在缺陷，邮箱也会变为true)
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str: string): boolean {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str)
}
export default isUrl
