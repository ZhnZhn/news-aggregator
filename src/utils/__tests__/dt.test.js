import {
  toMls,
  toTimeDate
} from '../dt'

const UTC_MLS_2010_12_31 = 1293753600000;

describe('dt toMls', () => {
  const fn = toMls;
  test('should return number of UTC mls from YYYYMMDDTHHMMSS string', () => {
    expect(fn('20101231000000')).toBe(UTC_MLS_2010_12_31)
    expect(fn('2010123100000')).toBe(UTC_MLS_2010_12_31)
  })
  
  test('should return void 0 in edge cases', () => {
    expect(fn()).toBe(void 0)
    expect(fn(null)).toBe(void 0)
    expect(fn({})).toBe(void 0)
    expect(fn([])).toBe(void 0)
    expect(fn(UTC_MLS_2010_12_31)).toBe(void 0)

    expect(fn('')).toBe(void 0)
    expect(fn('201012310000')).toBe(void 0)
  })
})

describe('dt toTimeDate', () => {
  const fn = toTimeDate
  test('should return empty string for falsy arguments', () => {
    expect(fn('')).toBe('')
    expect(fn()).toBe('')
    expect(fn(null)).toBe('')
  })

  test('should return time date string', () => {
    //yyyy-MM-ddTHH:mm:ssZ case
    expect(fn('2010-12-31T00:00:00Z')).toBe('00:00:00 31-12-2010')
    expect(fn('2010-12-31')).toBe('31-12-2010')
  })

  test('should return default value for edge cases', () => {
    const dfValue = 'No Date'
    expect(fn({})).toBe(dfValue)
    expect(fn([])).toBe(dfValue)
  })

})
