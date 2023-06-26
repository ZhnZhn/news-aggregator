"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _isNumberInRange = _interopRequireDefault(require("../isNumberInRange"));
describe('util isNumberInRange', () => {
  const fn = _isNumberInRange.default;
  test('should return boolean is number in range', () => {
    expect(fn(1, 3, 2)).toBe(true);
    expect(fn(1, 3, 1)).toBe(true);
    expect(fn(1, 3, 3)).toBe(true);
    expect(fn(1, 3, 0)).toBe(false);
    expect(fn(1, 3, 4)).toBe(false);
  });
  test('should return false in edge cases', () => {
    expect(fn()).toBe(false);
    expect(fn(1)).toBe(false);
    expect(fn(1, 3)).toBe(false);
    expect(fn('1', '3', '2')).toBe(false);
  });
});
//# sourceMappingURL=isNumberInRange.test.js.map