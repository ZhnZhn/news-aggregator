"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isNumber = exports.isArr = void 0;
const isStr = v => typeof v === 'string';
exports.isStr = isStr;
const isObj = v => v && typeof v === 'object';
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
const isNumber = n => typeof n === 'number' && n - n === 0;
exports.isNumber = isNumber;
//# sourceMappingURL=isTypeFn.js.map