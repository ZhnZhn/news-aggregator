"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE) {
    return {
      ROOT: (0, _extends2["default"])({}, CSS_RULE.BG)
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.Style.js.map