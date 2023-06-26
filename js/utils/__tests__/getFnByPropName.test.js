"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _getFnByPropName = _interopRequireDefault(require("../getFnByPropName"));
describe('util getFnByPropName', () => {
  const fn = _getFnByPropName.default;
  test('should return function from object by propName', () => {
    const propName1 = 'propName1',
      fn1 = () => {},
      obj = {
        [propName1]: fn1
      };
    expect(fn(obj, propName1)).toBe(fn1);
  });
  test('should return identity arrow function othewise', () => {
    const propName1 = 'propName1',
      fn1 = () => {},
      obj = {
        [propName1]: fn1
      },
      dfValue = 'dfValue';
    const _rFn1 = fn(obj, propName1 + 'a', dfValue);
    expect(typeof _rFn1).toBe('function');
    expect(_rFn1()).toBe(dfValue);
    const _rFn2 = fn(null, propName1 + 'a', dfValue);
    expect(typeof _rFn2).toBe('function');
    expect(_rFn2()).toBe(dfValue);
    const _rFn3 = fn(void 0, propName1 + 'a', dfValue);
    expect(typeof _rFn3).toBe('function');
    expect(_rFn3()).toBe(dfValue);
  });
});
//# sourceMappingURL=getFnByPropName.test.js.map