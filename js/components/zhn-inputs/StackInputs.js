"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Dialog = require("../dialogs/Dialog.Style");
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));
var _InputFromToDate = _interopRequireDefault(require("../zhn-m-input/InputFromToDate"));
var _jsxRuntime = require("preact/jsx-runtime");
var _preact = require("preact");
const _isObj = v => v && typeof v === 'object';
const SELECT_STYLE_CONFIG = (0, _Dialog.crSelectStyleConfig)();
const _isInput = (isInputs, id) => _isObj(isInputs) ? !!isInputs[id] : true;
const StackInputs = _ref => {
  let {
    isInputs,
    configs,
    onSelect,
    onEnter
  } = _ref;
  return (configs || []).map(arrConfig => {
    const _type = arrConfig[0],
      _inputId = arrConfig[1],
      _elItem = _type === 's' ? (0, _jsxRuntime.jsx)(_InputSelect.default, {
        id: _inputId,
        caption: arrConfig[2],
        options: arrConfig[3],
        initItem: arrConfig[4],
        styleConfig: SELECT_STYLE_CONFIG,
        onSelect: onSelect
      }, _inputId) : _type === 't' ? (0, _preact.createElement)(_TextField.default, {
        ...arrConfig[4],
        key: _inputId,
        id: _inputId,
        style: _Dialog.S_INPUT_ROOT,
        caption: arrConfig[2],
        initValue: arrConfig[3],
        onEnter: onEnter,
        onBlur: onSelect,
        onKeyDown: onSelect
      }) : _type === 'ft' ? (0, _jsxRuntime.jsx)(_InputFromToDate.default, {
        style: _Dialog.S_INPUT_DATE,
        initialFrom: arrConfig[3],
        initialTo: arrConfig[4],
        onInput: onSelect
      }, "_ft") : void 0;
    return _elItem ? (0, _jsxRuntime.jsx)(_ShowHide.default, {
      isShow: _isInput(isInputs, _inputId),
      children: _elItem
    }) : null;
  });
};
var _default = StackInputs;
exports.default = _default;
//# sourceMappingURL=StackInputs.js.map