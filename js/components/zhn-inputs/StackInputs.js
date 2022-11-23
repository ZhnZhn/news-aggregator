"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));
var _jsxRuntime = require("preact/jsx-runtime");
var _preact = require("preact");
var StackInputs = function StackInputs(_ref) {
  var TS = _ref.TS,
    configs = _ref.configs,
    onSelect = _ref.onSelect;
  return (configs || []).map(function (arrConfig) {
    var _type = arrConfig[0];
    if (_type === 's') {
      return (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: arrConfig[1],
        caption: arrConfig[2],
        options: arrConfig[3],
        initItem: arrConfig[4],
        styleConfig: TS.SELECT,
        onSelect: onSelect
      }, arrConfig[1]);
    } else if (_type === 't') {
      return (0, _preact.createElement)(_TextField["default"], (0, _extends2["default"])({}, arrConfig[4], {
        key: arrConfig[1],
        id: arrConfig[1],
        style: TS.INPUT_ROOT,
        caption: arrConfig[2],
        initValue: arrConfig[3],
        onEnter: onSelect,
        onBlur: onSelect
      }));
    }
    return null;
  });
};
var _default = StackInputs;
exports["default"] = _default;
//# sourceMappingURL=StackInputs.js.map