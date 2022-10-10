"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    var _paneRoot;

    switch (themeName) {
      case 'WHITE':
        _paneRoot = {
          backgroundColor: 'rgb(235, 241, 245)'
        };
        break;

      case 'SAND':
        _paneRoot = {
          backgroundColor: '#e8e0cb'
        };
        break;

      default:
    }

    return {
      PANE_CAPTION: (0, _extends2["default"])({}, CSS_RULE.BG_HEADER),
      PANE_ROOT: (0, _extends2["default"])({}, _paneRoot)
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=NewsPane.Style.js.map