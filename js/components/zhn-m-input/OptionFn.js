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
const _crOptionItem = str => [(0, _uiApi.toFirstUpperCase)(str), str];
const crSelectOptions = values => (0, _uiApi.safeMap)(values, _crOptionItem) || [];
exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map