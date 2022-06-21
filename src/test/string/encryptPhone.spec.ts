import { encryptPhone } from '@/modules/string/index'

describe('测试encryptPhone', () => {
  it('默认情况', () => {
    expect(encryptPhone(11800001111)).toBe('118****1111')
  })
  it('传入第二个参数', () => {
    expect(encryptPhone(11800001111, '@#@#')).toBe('118@#@#1111')
  })
})
