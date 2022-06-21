/**
 * 检测标准
 *
 * @enum {number}
 */
enum ECheckType {
  /**
   * 严格，按照国家标准来
   */
  strict = 1,
  /**
   * 普通，要求第二位数字是2-9
   */
  normal = 2,
  /**
   * 宽松，1开头的11位数字就行
   */
  easy = 3
}
/**
 * 校验传入的数字是不是合法的手机号，有三个校验强度
 *
 * @param {number} number 传入的数字
 * @param {ECheckType} [type=ECheckType.easy] 校验强度，默认宽松
 * @return {*} {boolean} 布尔值
 */
function checkMobile(number: number, type: ECheckType = ECheckType.easy) {
  if (typeof number !== 'number') {
    return false
  }
  switch (type) {
    case ECheckType.strict:
      return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(
        String(number)
      )
    case ECheckType.normal:
      return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(String(number))
    case ECheckType.easy:
      return /^(?:(?:\+|00)86)?1\d{10}$/.test(String(number))
    default:
      return false
  }
}

export { ECheckType, checkMobile }
