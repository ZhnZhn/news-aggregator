"use strict";

exports.__esModule = true;
exports.formatNumber = void 0;
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g,
  _isNumber = n => typeof n === 'number' && n - n === 0;
const formatNumber = value => _isNumber(value) ? value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : '' + value : void 0;
exports.formatNumber = formatNumber;
//# sourceMappingURL=formatNumber.js.map