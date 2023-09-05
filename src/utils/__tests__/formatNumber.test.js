import { formatNumber } from '../formatNumber';

describe('util formatNumber', () => {
  const fn = formatNumber;
  test('should return format number string', () => {
    expect(fn(9)).toBe('9')
    expect(fn(99)).toBe('99')
    expect(fn(999)).toBe('999')

    expect(fn(1000)).toBe('1,000')
    expect(fn(9999)).toBe('9,999')

    expect(fn(10000)).toBe('10,000')
    expect(fn(99999)).toBe('99,999')

    expect(fn(100000)).toBe('100,000')
  })

  test('should return argument in edge casee', () => {
    expect(fn()).toBe(void 0)
    expect(fn(null)).toBe(void 0)
    expect(fn(NaN)).toBe(void 0)
    expect(fn(true)).toBe(void 0)
    expect(fn('1000')).toBe(void 0)
  })
})
