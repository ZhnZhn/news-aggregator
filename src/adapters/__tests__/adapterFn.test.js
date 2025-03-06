import {
  toMls,
  updateNextPage
} from "../adapterFn";

describe("toMls", () => {
  const fn = toMls;
  test("should return number of miliseconds from number of seconds", () => {
    expect(fn(1)).toBe(1000)
    expect(fn(10)).toBe(10000)
    expect(fn(0)).toBe(0)
  })
  test("should return undefined in edge cases", ()=>{
    expect(fn(NaN)).toBe(undefined)
    expect(fn()).toBe(undefined)
    expect(fn(null)).toBe(undefined)
    expect(fn('')).toBe(undefined)
    expect(fn(true)).toBe(undefined)
  })
})

describe("updateNextPage", () => {
  const fn = updateNextPage;
  test("should correct update next page properties", ()=>{
    const options = {};
    fn(options)
    expect(options).toEqual({
      _nextPage: 2,
      _mlsFr: 15000
    })
    fn(options, 20000)
    expect(options).toEqual({
      _nextPage: 3,
      _mlsFr: 20000
    })
  })
})
