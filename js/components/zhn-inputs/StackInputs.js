"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));
var _InputFromToDate = _interopRequireDefault(require("../zhn-m-input/InputFromToDate"));
var _jsxRuntime = require("preact/jsx-runtime");
var _preact = require("preact");
var _isObj = function _isObj(v) {
  return v && typeof v === 'object';
};
var _isInput = function _isInput(isInputs, id) {
  return _isObj(isInputs) ? !!isInputs[id] : true;
};
var StackInputs = function StackInputs(_ref) {
  var TS = _ref.TS,
    isInputs = _ref.isInputs,
    configs = _ref.configs,
    onSelect = _ref.onSelect,
    onEnter = _ref.onEnter;
  return (configs || []).map(function (arrConfig) {
    var _type = arrConfig[0],
      _inputId = arrConfig[1],
      _elItem = _type === 's' ? (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: _inputId,
        caption: arrConfig[2],
        options: arrConfig[3],
        initItem: arrConfig[4],
        styleConfig: TS.SELECT,
        onSelect: onSelect
      }, _inputId) : _type === 't' ? (0, _preact.createElement)(_TextField["default"], (0, _extends2["default"])({}, arrConfig[4], {
        key: _inputId,
        id: _inputId,
        style: TS.INPUT_ROOT,
        caption: arrConfig[2],
        initValue: arrConfig[3],
        onEnter: onEnter,
        onBlur: onSelect,
        onKeyDown: onSelect
      })) : _type === 'ft' ? (0, _jsxRuntime.jsx)(_InputFromToDate["default"], {
        style: TS.INPUT_DATE,
        initialFrom: arrConfig[3],
        initialTo: arrConfig[4],
        onInput: onSelect
      }, "_ft") : void 0;
    return _elItem ? (0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: _isInput(isInputs, _inputId),
      children: _elItem
    }) : null;
  });
};
var _default = StackInputs;
exports["default"] = _default;
//# sourceMappingURL=StackInputs.js.map