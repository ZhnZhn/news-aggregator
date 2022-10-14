"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _CL = require("../styles/CL");

var styleConfig = {
  //themeName: void 0,
  //style: void 0,
  createStyle: function createStyle(CSS_RULE) {
    return {
      HEADER: (0, _extends2["default"])({}, CSS_RULE.BG),
      PANE: (0, _extends2["default"])({}, CSS_RULE.BG),
      BT: {
        CL_FLAT_DIV: _CL.CL_BT_FLAT_DIV
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.Style.js.map