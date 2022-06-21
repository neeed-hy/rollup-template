/**
 * 获取字符串的长度，中文算两个长度，其他字符算一个长度。
 *
 * @param {string} str 待分析的字符串
 * @return {*} 字符串的等效长度
 */
function getStringLength(str: string) {
  if (!str) return 0
  let count = 0
  for (let i = 0; i < str.length; i += 1) {
    if (/[\u4e00-\u9fa5]/.test(str[i])) {
      count += 2
    } else {
      count += 1
    }
  }
  return count
}
export { getStringLength }
