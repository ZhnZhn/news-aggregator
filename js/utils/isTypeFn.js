"use strict";

exports.__esModule = true;
exports.isStr = exports.isObj = exports.isNumber = exports.isFn = exports.isArr = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isStr = exports.isStr = _fIsTypeof('string');
const isFn = exports.isFn = _fIsTypeof('function');
const isObj = v => v && typeof v === 'object';
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
const isNumber = n => typeof n === 'number' && n - n === 0;
exports.isNumber = isNumber;
//# sourceMappingURL=isTypeFn.js.map