/**
 * 加密手机号中间四位。如果传入的手机号码的格式不满足`/^\d{11}$/`格式，则返回phoneNumber本身。
 *
 * @param {number} phoneNumber 待处理的手机号
 * @param {string} [symbol='****'] 中间替换的字符串，默认为****
 * @return {*} 处理后的字符串
 */
function encryptPhone(phoneNumber: number, symbol = '****') {
  const strPhone = `${phoneNumber}`
  const reg = /^(\d{3})\d{4}(\d{4})$/
  if (!reg.test(strPhone)) return String(phoneNumber)
  return strPhone.replace(reg, `$1${symbol}$2`)
}

export { encryptPhone }
