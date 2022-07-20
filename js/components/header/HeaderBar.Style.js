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
      CL_QUERY_ITEM: CSS_RULE.CL_QUERY_ITEM,
      HEADER: (0, _extends2["default"])({}, CSS_RULE.BG),
      PANE: (0, _extends2["default"])({}, CSS_RULE.BG),
      BT: {
        FLAT_ROOT: {
          color: CSS_RULE.BG_HEADER.backgroundColor
        },
        CL_FLAT_DIV: CSS_RULE.CL_BT_FLAT_DIV
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.Style.js.map