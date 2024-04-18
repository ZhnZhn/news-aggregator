"use strict";

exports.__esModule = true;
exports.trimStr = exports.toLowerCase = void 0;
var _isTypeFn = require("./isTypeFn");
const toLowerCase = v => (0, _isTypeFn.isStr)(v) ? v.toLowerCase() : v;
exports.toLowerCase = toLowerCase;
const trimStr = v => (0, _isTypeFn.isStr)(v) ? v.trim() : '';
exports.trimStr = trimStr;
//# sourceMappingURL=strFn.js.map