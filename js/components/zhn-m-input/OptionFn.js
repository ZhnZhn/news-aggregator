"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getItemValue = exports.getItemCaption = exports.crSelectOptions = void 0;

var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));

var _isArr = Array.isArray;

var getItemCaption = function getItemCaption(item) {
  return _isArr(item) ? item[0] : '';
};

exports.getItemCaption = getItemCaption;

var getItemValue = function getItemValue(item) {
  return _isArr(item) ? item[1] || item[0] : void 0;
};

exports.getItemValue = getItemValue;

var crSelectOptions = function crSelectOptions(values) {
  return (values || []).map(function (str) {
    return [(0, _toFirstUpperCase["default"])(str), str];
  });
};

exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map