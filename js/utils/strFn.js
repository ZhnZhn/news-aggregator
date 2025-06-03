"use strict";

exports.__esModule = true;
exports.trimStr = exports.toLowerCase = exports.replaceAllBlankByNbsp = exports.getNotEmpty = void 0;
var _isTypeFn = require("./isTypeFn");
const toLowerCase = v => (0, _isTypeFn.isStr)(v) ? v.toLowerCase() : "";
exports.toLowerCase = toLowerCase;
const trimStr = v => (0, _isTypeFn.isStr)(v) ? v.trim() : "";
exports.trimStr = trimStr;
const replaceAllBlankByNbsp = v => (0, _isTypeFn.isStr)(v) ? v.replaceAll(" ", "\u00A0") : "";
exports.replaceAllBlankByNbsp = replaceAllBlankByNbsp;
const getNotEmpty = str => (0, _isTypeFn.isStr)(str) && str !== "" ? str : void 0;
exports.getNotEmpty = getNotEmpty;
//# sourceMappingURL=strFn.js.map