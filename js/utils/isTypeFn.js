"use strict";

exports.__esModule = true;
exports.isUndef = exports.isTypeObj = exports.isStr = exports.isObj = exports.isNumber = exports.isFn = exports.isBool = exports.isArr = void 0;
const _fIsTypeof = strType => v => typeof v === strType;
const isStr = exports.isStr = _fIsTypeof('string');
const isFn = exports.isFn = _fIsTypeof('function');
const isBool = exports.isBool = _fIsTypeof('boolean');
const isUndef = exports.isUndef = _fIsTypeof('undefined');
const isTypeObj = exports.isTypeObj = _fIsTypeof('object');
const isObj = v => v && isTypeObj(v);
exports.isObj = isObj;
const isArr = exports.isArr = Array.isArray;
const isNumber = n => typeof n === 'number' && n - n === 0;
exports.isNumber = isNumber;
//# sourceMappingURL=isTypeFn.js.map