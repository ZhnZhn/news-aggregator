"use strict";

exports.__esModule = true;
exports.getItemValue = exports.getItemCaption = exports.crSelectOptions = void 0;
var _uiApi = require("../uiApi");
const _isArr = Array.isArray,
  _isStr = value => typeof value === 'string';
const getItemCaption = item => _isArr(item) ? item[0] : '';
exports.getItemCaption = getItemCaption;
const getItemValue = item => _isArr(item) ? _isStr(item[1]) ? item[1] : item[0] : void 0;
exports.getItemValue = getItemValue;
const crSelectOptions = values => (values || []).map(str => [(0, _uiApi.toFirstUpperCase)(str), str]);
exports.crSelectOptions = crSelectOptions;
//# sourceMappingURL=OptionFn.js.map