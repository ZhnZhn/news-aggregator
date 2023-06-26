"use strict";

exports.__esModule = true;
exports.default = void 0;
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g,
  _isNumber = n => typeof n === 'number' && n - n === 0,
  formatNumber = value => _isNumber(value) ? value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : '' + value : void 0;
var _default = formatNumber;
exports.default = _default;
//# sourceMappingURL=formatNumber.js.map