"use strict";

exports.__esModule = true;
exports.setItemFocus = exports.getItemValue = exports.getItemCaption = exports.focusPrevItem = exports.focusNextItem = exports.focusLastItem = exports.focusFirstItem = exports.crSelectOptions = exports.FOCUS_PREV_OPTION = exports.FOCUS_NEXT_OPTION = void 0;
var _toFirstUpperCase = require("../../utils/toFirstUpperCase");
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const FOCUS_NEXT_OPTION = exports.FOCUS_NEXT_OPTION = "n";
const FOCUS_PREV_OPTION = exports.FOCUS_PREV_OPTION = "p";
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
const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};
const setItemFocus = (elItem, ref) => elItem ? (elItem.scrollIntoView(SCROLL_OPTIONS), elItem.focus(), (0, _uiApi.setRefValue)(ref, elItem), !0) : !1;
exports.setItemFocus = setItemFocus;
const _fFocusItem = propName => ref => {
  const _elItem = ((0, _uiApi.getRefValue)(ref) || {})[propName];
  return setItemFocus(_elItem, ref);
};
const focusNextItem = exports.focusNextItem = _fFocusItem('nextSibling');
const focusPrevItem = exports.focusPrevItem = _fFocusItem('previousSibling');
const _fFocusParentItem = propName => ref => {
  const _elItem = (((0, _uiApi.getRefValue)(ref) || {}).parentNode || {})[propName];
  setItemFocus(_elItem, ref);
};
const focusFirstItem = exports.focusFirstItem = _fFocusParentItem('firstChild');
const focusLastItem = exports.focusLastItem = _fFocusParentItem('lastChild');
//# sourceMappingURL=OptionFn.js.map