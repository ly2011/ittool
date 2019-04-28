## Array

### arrayEqual

判断两个数组是否相等

**Returns**

(Boolean): 返回两个数组是否相等的结果.

**Example**

```js
var arr1 = [1, 2, 3]
var arr2 = [1, 2, 3]
_.arrayEqual(arr1, arr2) // => true
```

### difference

数组去差集(即取 arr1 中存在，arr2 中不存在的值)

**Returns**

(Array): 返回取差集后的 array.

**Example**

```js
_.difference([1,2,3], [1,2,4]) // => [3]
```

### intersection

数组取交集(即取既在 arr1 中存在, 又在 arr2 中存在的值).

**Returns**

(Array): 返回取交集后的 array.

**Example**

```js
_.intersection([1, 2, 'a', 1, 'a']) // => [1, 'a']
_.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) // => [ 2, 'a']
```

### union

多个数组取并集 | 数组去重

**Arguments**

`...arr(Array)`: 可传入 1 个或多个数组

**Returns**

(Array): 返回去重后的 array.

**Example**

```js
_.union([1, 3, 2, 2, 1]) // => [1, 3, 2]
_.union([1, 'a', 3, 1], [4, 'a', 'b'], [2, 3, 'b', 'c'])
// => [1, 'a', 3, 4, 'b', 2, 'c']
```

## money

### formatMoney

特殊符号分割金额数字.

**Arguments**

`amount(Number|String)`: 需要格式化的金额

`options(Object)`: 金额格式化的其他参数

`locales(String)`: 本地化参数

**Returns**

(String): 返回格式化后的金额

```js
_.formatMoney(239.575) // => 239.58
```

## Object

### isEmptyObject

判断对象是否为空.

**Returns**

(Boolean): 返回是否是空对象

**Example**

```js
_.isEmptyObject({}) // => true
```

## Regexp

### isEmail

判断是否为邮箱地址.

**Example**

```js
_.isEmail('123456@gmail.com') // => true
```

### isIdCard

判断是否为身份证号

**Example**

```js
_.isIdCard('350301198906180060') // => true
```

### isPhoneNum

判断是否为手机号.

**Example**

```js
_.isPhoneNum(15712345678) // => true
```

### isTel

判断是否为座机.

**Example**

```js
_.isTel('010-86551122') // => true
```

### isPhoneOrTel

判断是否是座机或手机号码.

**Example**

```js
_.isPhoneOrTel('010-86551122') // => true
```

### isUrl

判断是否为URL地址.

**Example**

```js
_.isUrl('https://github.com/ly2011/ittool') // => true
```

## time

### formatDate

格式化日期对象.

**Arguments**

`date(Date|String|Number)`: 需要格式化的日期

`format`: 格式

**Returns**

(String): 返回格式化后的字符串

```js
_.formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
```

### getDaysInMonth

获取指定年的指定月的天数.

**Arguments**

`year(Number)`: 年份
`month(Number)`: 月份

**Returns**

(Number): 返回天数.

```js
_.getDaysInMonth(2019, 2) // => 28
```

### isLeapYear

判断指定年份是否是闰年.

```js
_.isLeapYear(2000) // => true
```

### isSameDay

判断是否为同一天.

```js
_.isSameDay(new Date(), new Date()) // => true
```

### sleep

延时执行.

```js
_.sleep(50) // 延时执行 50 毫秒
```

### getCurMonthLastDate

获取日期本月份的最后一天.

```js
_.getCurMonthLastDate(new Date('2019/01/01')) // => new Date('2019/01/31')
```