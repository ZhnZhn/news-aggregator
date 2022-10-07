"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};

var isNumberInRange = function isNumberInRange(min, max, v) {
  return _isNumber(v) && v >= min && v <= max;
};

var _default = isNumberInRange;
exports["default"] = _default;
//# sourceMappingURL=isNumberInRange.js.map