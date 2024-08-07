"use strict";

exports.__esModule = true;
exports.getItemValue = exports.getItemCaption = exports.crSelectOptions = void 0;
var _uiApi = require("../uiApi");
const getItemCaption = item => (0, _uiApi.isArr)(item) ? item[0] : '';
exports.getItemCaption = getItemCaption;
const getItemValue = item => {
  const value = (0, _uiApi.isArr)(item) ? (0, _uiApi.isStr)(item[1]) ? item[1] : item[0] : void 0;
  return (0, _uiApi.isStr)(value) ? value.trim() : value;
};
exports.getItemValue = getItemValue;
const _crOptionItemWithFirstUpperCase = str => [(0, _uiApi.toFirstUpperCase)(str), str];
const _crOptionItem = str => [str, str];
const crSelectOptions = (values, isNotFirstUpperCase) => (0, _uiApi.safeMap)(values, isNotFirstUpperCase ? _crOptionItem : _crOptionItemWithFirstUpperCase) || [];
exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map