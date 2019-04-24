declare namespace ittool {
  /**
   *
   * @desc 判断两个数组是否相等
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Boolean}
   */
  export function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean

  /**
   *
   * @desc   判断`obj`是否为空
   * @param  {Object} obj
   * @return {Boolean}
   */
  export function isEmptyObject(obj: object): boolean

  /**
   *
   * @desc   判断是否为邮箱地址
   * @param  {String}  str
   * @return {Boolean}
   */
  export function isEmail(str: string): boolean

  /**
   *
   * @desc  判断是否为身份证号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  export function isIdCard(str: string | number): boolean

  /**
   *
   * @desc   判断是否为手机号
   * @param  {String|Number} str
   * @return {Boolean}
   */
  export function isPhoneNum(str: string | number): boolean

  /**
   *
   * @desc   判断是否为座机
   * @param  {String} str
   * @return {Boolean}
   */
  export function isTel(str: string): boolean

  /**
   *
   * @desc   判断是否是座机或手机号码
   * @param  {String|Number} str
   * @return {Boolean}
   */
  export function isPhoneOrTel(str: string | number): boolean

  /**
   *
   * @desc   判断是否为URL地址
   * @param  {String} str
   * @return {Boolean}
   */
  export function isUrl(str: string): boolean

  /**
   * @desc   判断是否为同一天
   * @param  {Date} date1
   * @param  {Date} date2 可选／默认值：当天
   * @return {Boolean}
   */
  export function isSameDay(date1: Date, date2: Date): boolean
}

declare module 'ittool' {
  export = ittool
}
