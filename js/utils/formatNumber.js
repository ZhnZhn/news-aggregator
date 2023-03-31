"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g,
  _isNumber = function _isNumber(n) {
    return typeof n === 'number' && n - n === 0;
  },
  formatNumber = function formatNumber(value) {
    return _isNumber(value) && value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : value;
  };
var _default = formatNumber;
exports["default"] = _default;
//# sourceMappingURL=formatNumber.js.map