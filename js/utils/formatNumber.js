"use strict";

exports.__esModule = true;
exports.formatNumber = void 0;
var _isTypeFn = require("./isTypeFn");
const REPLACER_PATTERN = /(.)(?=(\d{3})+$)/g;
const formatNumber = value => (0, _isTypeFn.isNumber)(value) ? value >= 1000 ? ('' + value).replace(REPLACER_PATTERN, '$1,') : '' + value : void 0;
exports.formatNumber = formatNumber;
//# sourceMappingURL=formatNumber.js.map