import { joinStrsBy } from '../joinStrsBy';

describe('joinStrsBy', () => {
  const fn = joinStrsBy;
  test('should return string with joined string tokens', () => {
    expect(fn(['token1', 'token2'])).toBe('token1, token2')
    expect(fn(['', 'token2'])).toBe('token2')
    expect(fn(['token1'])).toBe('token1')
    expect(fn([])).toBe('')

    expect(fn(['token1', 'token2'], ', ')).toBe('token1, token2')
    expect(fn(['token1', 'token2'], '-')).toBe('token1-token2')
  })

  test('should return empty string in edge casee', () => {
    expect(fn()).toBe('')
    expect(fn(null)).toBe('')
    expect(fn({})).toBe('')
    expect(fn(true)).toBe('')
    expect(fn(false)).toBe('')
    expect(fn(1)).toBe('')
    expect(fn('2')).toBe('')
    expect(fn(()=>{})).toBe('')
  })
})
