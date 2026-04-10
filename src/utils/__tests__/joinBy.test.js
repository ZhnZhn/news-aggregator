import {
  joinBy,
  joinByComma,
  joinByBlank
} from "../joinBy";

const _checkEmptyArgsCase = (fn) => {
  expect(fn()).toBe("")
  expect(fn("")).toBe("")
  expect(fn("", null)).toBe("")
  expect(fn("", null, void 0)).toBe("")
};

describe("joinBy", ()=>{
  const fn = joinBy;
  test("shoulr return joined string without falsy values", ()=>{
    expect(fn()).toBe("")
    expect(fn(void 0, "a")).toBe("a")
    expect(fn("a", "b")).toBe("ab")
    expect(fn("a", null)).toBe("a")
  })
})

describe("joinByComma", () => {
  const fn = joinByComma;
  test("should filter falsy values and join arguments by comma to string", () => {
    expect(fn("a")).toBe("a")
    expect(fn("a", "b")).toBe("a, b")

    expect(fn("a", "", "b")).toBe("a, b")
    expect(fn("a", void 0, "b")).toBe("a, b")
    expect(fn("a", null, "b")).toBe("a, b")

    expect(fn("a", "b", "c", "d")).toBe("a, b, c, d")
  })
  test("should return empty string for empty argumenst", () => {
    _checkEmptyArgsCase(fn)
  })
})

describe("joinByBlank", () => {
  const fn = joinByBlank;
  test("should filter falsy values and join arguments by blank to string", () => {
    expect(fn("a")).toBe("a")
    expect(fn("a", "b")).toBe("a b")

    expect(fn("a", "", "b")).toBe("a b")
    expect(fn("a", void 0, "b")).toBe("a b")
    expect(fn("a", null, "b")).toBe("a b")

    expect(fn("a", "b", "c", "d")).toBe("a b c d")
  })
  test("should return empty string for empty argumenst", () => {
    _checkEmptyArgsCase(fn)
  })
})
