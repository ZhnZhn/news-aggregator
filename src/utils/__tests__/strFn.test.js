import {
  toLowerCase,
  trimStr,
  replaceAllBlankByNbsp,
  getNotEmpty
} from '../strFn';

describe('toLowerCase', ()=>{
  const fn = toLowerCase;
  test('should return string in lower case', () => {
    expect(fn('ABCDEFG')).toBe('abcdefg')
    expect(fn('1ABCDEFG2')).toBe('1abcdefg2')
  })
  test('should return empty string in edge cases', ()=>{
    expect(fn()).toBe("")
    expect(fn(null)).toBe("")
    expect(fn(1)).toBe("")
    expect(fn(false)).toBe("")
  })
})

describe('trimStr', ()=>{
  const fn = trimStr;
  test('should return trimed string', ()=>{
    expect(fn('   a  ')).toBe('a')
  })
  test('should return empty string in edge cases', ()=>{
    expect(fn()).toBe("")
    expect(fn(null)).toBe("")
    expect(fn(1)).toBe("")
    expect(fn(false)).toBe("")
  })
})

describe('replaceAllBlankByNbsp',()=>{
  const fn = replaceAllBlankByNbsp;
  test('should replace all blanks by nbsp', ()=>{
    const result = fn("a b c");
    expect(result.codePointAt(1)).toBe(160)
    expect(result.codePointAt(3)).toBe(160)
  })
  test('should return empty string in edge cases', ()=>{
    expect(fn()).toBe("")
    expect(fn(null)).toBe("")
    expect(fn(1)).toBe("")
    expect(fn(false)).toBe("")
  })
})

describe('getNotEmpty',()=>{
  const fn = getNotEmpty;
  test('should return string in case argument not empty string or void 0 otherwise', ()=>{
    expect(fn('a')).toBe('a')
    expect(fn('')).toBe(void 0)

    expect(fn()).toBe(void 0)
    expect(fn(null)).toBe(void 0)
    expect(fn(1)).toBe(void 0)
    expect(fn(false)).toBe(void 0)
  })
})
