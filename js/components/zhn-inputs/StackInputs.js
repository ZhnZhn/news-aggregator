"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _jsxRuntime = require("preact/jsx-runtime");
var StackInputs = function StackInputs(_ref) {
  var TS = _ref.TS,
    configs = _ref.configs,
    onSelect = _ref.onSelect;
  return (configs || []).map(function (arrConfig) {
    if (arrConfig[0] === 's') {
      return (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: arrConfig[1],
        caption: arrConfig[2],
        options: arrConfig[3],
        initItem: arrConfig[4],
        styleConfig: TS.SELECT,
        onSelect: onSelect
      }, arrConfig[1]);
    }
    return null;
  });
};
var _default = StackInputs;
exports["default"] = _default;
//# sourceMappingURL=StackInputs.js.map