import { checkMobile, ECheckType } from '@/modules/judgement/checkMobile'

describe('测试checkMobile', () => {
  it('宽松情况', () => {
    expect(checkMobile(11800001111)).toBe(true)
  })
  it('严格情况', () => {
    expect(checkMobile(11800001111, ECheckType.strict)).toBe(false)
  })
})
