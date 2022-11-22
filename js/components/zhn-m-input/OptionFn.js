"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getItemValue = exports.getItemCaption = exports.crSelectOptions = void 0;
var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));
var _isArr = Array.isArray,
  _isStr = function _isStr(value) {
    return typeof value === 'string';
  };
var getItemCaption = function getItemCaption(item) {
  return _isArr(item) ? item[0] : '';
};
exports.getItemCaption = getItemCaption;
var getItemValue = function getItemValue(item) {
  return _isArr(item) ? _isStr(item[1]) ? item[1] : item[0] : void 0;
};
exports.getItemValue = getItemValue;
var crSelectOptions = function crSelectOptions(values) {
  return (values || []).map(function (str) {
    return [(0, _toFirstUpperCase["default"])(str), str];
  });
};
exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map