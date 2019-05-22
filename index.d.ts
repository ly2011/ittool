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
   * @desc  数组取差集(即取 arr1 中存在, arr2 中不存在的值)
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   */
  export function difference(arr1: Array<any>, arr2: Array<any>): Array<any>

  /**
   *
   * @desc  数组取交集(即取既在 arr1 中存在, 又在 arr2 中存在的值)
   * @param {Array} arr1
   * @param {Array} arr2
   * @return {Array}
   */
  export function intersection(arr1: Array<any>, arr2: Array<any>): Array<any>

  /**
   * 多个数组取并集 | 数组去重
   * @param  {Array} ...arr 可传入 1 个或多个数组
   * @return {Array}
   */
  export function union(...arr: Array<any>): Array<any>

  /**
   * https://bost.ocks.org/mike/shuffle/compare.html
   * @desc 打乱一个数组的顺序
   * @param {Array} arr
   * @return {Array}
   * @example  _.shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
   */
  export function shuffle(arr: Array<any>): Array<any>

  /**
   *
   * @desc  特殊符号分割金额数字
   * @param {Number|String} amount 金额
   * @param {Object} options 金额格式化的其他参数
   * @param {String} locales (如果locale为undefined (上例中为en-US)，则默认值为系统的locale，即navigator.language)
   * @return {String} 格式化后的金额
   */
  export function formatMoney(amount: number | string, options: object, locales: string): string

  /**
   * @desc 将阿拉伯数字翻译成中文的大写数字
   * @param {Number} num 金额
   * @return {String} 返回中文的大写数字
   * @example
   * numberToChinese(10.222) // 一十点二二二
   */
  export function numberToChinese(num: number): string

  /**
   * @desc 将数字转换为大写金额
   * @param {Number} num 金额
   * @return {String} 转为大写的金额
   * @example
   * changeToChinese(369.21) // 叁佰陆拾玖元贰角壹分
   */
  export function changeToChinese(num: number): string

  /**
   *
   * @desc   判断`obj`是否为空
   * @param  {Object} obj
   * @return {Boolean}
   */
  export function isEmptyObject(obj: object): boolean

  /**
   *
   * @desc 根据对象路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
   * @param {Object} obj 要检索的对象
   * @param {Array|String} path 要获取的对象路径
   * @param {*} defaultValue 如果解析值是 undefined，这值会被返回
   * @returns {*} 返回解析的值
   *
   * @example
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  export function get(obj: object, path: Array<string> | string, defaultValue: any = undefined): any

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
  export function omit(obj: object, keys: Array<string> | string): any

  /**
   * 创建一个从 object 中选中的属性的对象
   * @param {Object} obj 来源对象
   * @param {Array|String} keys 要选中的属性名，单独指定或指定在数组中
   * @returns {Object}
   * @example
   *
   * var object = { 'a': 1, 'b': '2', 'c': 3 };
   *
   * _.pick(object, ['a', 'c']);
   * // => { 'a': 1, 'c': 3 }
   */
  export function pick(obj: object, keys: Array<string> | string): any

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
   * @desc 判断是否合法车牌号
   * @param {String} license 车牌号码
   * @return {Boolean}
   */
  export function isCarLicense(license: string): boolean

  /**
   * 判断是否包含中文
   * @param {String} str
   * @return {Boolean}
   */
  export function isChinese(str: string): boolean

  /**
   * @desc 判断是否是IP地址
   * @param {String} str ip地址
   * @return {Boolean}
   */
  export function isIp(str: string): boolean

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

  /**
   *  格式化日期对象
   * @param {Date|String|Number} date
   * @param {String} format
   * @return {String} 返回格式化后的字符串
   */
  export function formatDate(date: Date | string | number, format: string): string

  /**
   *
   * @desc  延时执行
   * @param {Number} second
   */
  export function sleep(second: number): void

  /**
   *
   * @desc  判断指定年份是否是闰年
   * @param {Number} year 要判断的年份
   * @return {Boolean}  如果年份是闰年，则返回 true, 否则返回 false
   */
  export function isLeapYear(year: number): boolean

  /**
   *
   * @desc  获取指定年的指定月的天数
   * @param {Number} year
   * @param {Number} month
   * @return {Number} 返回天数
   */
  export function getDaysInMonth(year: number, month: number): number

  /**
   *
   * @desc  获取日期本月份的最后一天
   * @param {Date|String|Number} date
   * @return {Date}
   * @example getCurMonthLastDate(new Date('2019/01/01')) // new Date('2019/01/31')
   */
  export function getCurMonthLastDate(date: Date | string | number): Date

  /**
   * @desc 判断是否为合法的日期
   * @param {Date|Number|String} date
   * @return {Boolean}
   */
  export function isDate(date: Date | string | number): boolean

  /**
   * @desc 判断两个日期是否在同一个月内
   * @param {Date} start 开始日期
   * @param {Date} end 结束日期
   * @return {Boolean}
   */
  export function validateRangeInOneMonth(start: Date, end: Date): boolean

  /**
   * @desc 获取一年内的天数
   * @param {Number} year 年份
   * @return {Number} 闰年返回366,平年返回365
   */
  export function getDayCountOfYear(year: number): number

  /**
   * @desc  产生一个包括 min 与 max 之间的数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   * @return {Number} 返回随机数
   */
  export function random(min: number, max: number): number

  /**
   * @desc  精确数值的方法
   * @param {Number}  num 数值
   * @param {Number}  precision 小数点后数字的个数
   * @returns {Number}
   * @example
   * toPrecision(1.3333335, 6) => 1.333334
   */
  export function toPrecision(num: number, precision?: number): number
}

declare module 'ittool' {
  export = ittool
}
