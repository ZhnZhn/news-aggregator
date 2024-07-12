"use strict";

exports.__esModule = true;
exports.toFirstUpperCase = void 0;
var _isTypeFn = require("./isTypeFn");
const toFirstUpperCase = str => (0, _isTypeFn.isStr)(str) ? str.charAt(0).toUpperCase() + str.slice(1) : '';
exports.toFirstUpperCase = toFirstUpperCase;
//# sourceMappingURL=toFirstUpperCase.js.map