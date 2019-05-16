// https://github.com/chenhuiYj/ec-do/blob/master/src/ec-do-3.0.0-beta.2.js
// https://github.com/beezenD/clearlake/blob/master/components/format/index.tsx

type dateFormatorsProp = {
  [propName: string]: any
}
const dateFormators: dateFormatorsProp = {
  __proto__: null,
  Y: (date: Date, format: string) => {
    const year = date.getFullYear()
    return format.length < 3 ? year % 100 : year
  },
  y: (date: Date, format: string) => {
    const year = date.getFullYear()
    return format.length < 3 ? year % 100 : year
  },
  M: (date: Date) => date.getMonth() + 1,
  D: (date: Date) => date.getDate(),
  d: (date: Date) => date.getDate(),
  H: (date: Date) => date.getHours(),
  m: (date: Date) => date.getMinutes(),
  s: (date: Date) => date.getSeconds(),
  e: (date: Date) => '日一二三四五六'.charAt(date.getDay())
}

/**
 *  格式化日期对象
 * @param {String|Number|Date} date
 * @param {String} format
 * @return {String} 返回格式化后的字符串
 */
function formatDate(date = new Date(), format = 'YYYY-MM-DD HH:mm:ss'): string {
  const isValid = new Date(date).toString() === 'Invalid Date'
  if (isValid) throw new TypeError('Offer an illegal value {date} to format')
  if (!isValid) {
    if (date && !(date instanceof Date)) {
      date = new Date(date)
    }
    if (!+date) {
      return ''
    }

    return format.replace(/([YyMDdHms])\1*/g, (all, key) => {
      key = dateFormators[key] ? dateFormators[key](date, all) + '' : ''
      while (key.length < all.length) {
        key = '0' + key
      }
      return key
    })
  }
  return ''
}

// module.exports = formatDate
export default formatDate
