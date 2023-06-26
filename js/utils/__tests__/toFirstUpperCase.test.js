"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toFirstUpperCase = _interopRequireDefault(require("../toFirstUpperCase"));
describe('util toFirstUpperCase', () => {
  const fn = _toFirstUpperCase.default;
  test('should return string with first upper case letter', () => {
    expect(fn('text')).toBe('Text');
    expect(fn('long text')).toBe('Long text');
    expect(fn('')).toBe('');
  });
  test('should return empty string in edge casee', () => {
    expect(fn()).toBe('');
    expect(fn(null)).toBe('');
    expect(fn({})).toBe('');
    expect(fn([])).toBe('');
    expect(fn(2)).toBe('');
    expect(fn(true)).toBe('');
    expect(fn(false)).toBe('');
    expect(fn(() => {})).toBe('');
  });
});
//# sourceMappingURL=toFirstUpperCase.test.js.map