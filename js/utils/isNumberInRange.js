"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("./isTypeFn");
const isNumberInRange = (min, max, v) => (0, _isTypeFn.isNumber)(v) && v >= min && v <= max;
var _default = exports.default = isNumberInRange;
//# sourceMappingURL=isNumberInRange.js.map