"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isArr = void 0;
const isStr = v => typeof v === 'string';
exports.isStr = isStr;
const isObj = v => v && typeof v === 'object';
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
//# sourceMappingURL=isTypeFn.js.map