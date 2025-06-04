"use strict";

exports.__esModule = true;
exports.getItemValue = exports.getItemCaption = exports.crSelectOptions = void 0;
var _toFirstUpperCase = require("../../utils/toFirstUpperCase");
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const getItemCaption = item => (0, _isTypeFn.isArr)(item) ? item[0] : '';
exports.getItemCaption = getItemCaption;
const getItemValue = item => {
  const value = (0, _isTypeFn.isArr)(item) ? (0, _isTypeFn.isStr)(item[1]) ? item[1] : item[0] : void 0;
  return (0, _isTypeFn.isStr)(value) ? value.trim() : value;
};
exports.getItemValue = getItemValue;
const _crOptionItemWithFirstUpperCase = str => [(0, _toFirstUpperCase.toFirstUpperCase)(str), str];
const _crOptionItem = str => [str, str];
const crSelectOptions = (values, isNotFirstUpperCase) => (0, _uiApi.safeMap)(values, isNotFirstUpperCase ? _crOptionItem : _crOptionItemWithFirstUpperCase) || [];
exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map