"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _CL = require("../styles/CL");
var INPUT_WIDTH = 250;
var S_DIALOG_CAPTION = {
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    fontSize: '1.125rem'
  },
  S_BROWSER_CAPTION = (0, _extends2["default"])({}, S_DIALOG_CAPTION, {
    textAlign: 'center'
  }),
  S_BT_RAISED = {
    marginRight: 2,
    marginLeft: 2
  },
  S_INPUT_ROOT = {
    width: INPUT_WIDTH,
    display: 'block'
  },
  S_INPUT_DATE = {
    display: 'inline-block',
    width: 110
  },
  S_POWERED_BY = {
    margin: '16px 0 8px 16px'
  };
var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    return {
      R_DIALOG: (0, _extends2["default"])({}, CSS_RULE.R_DIALOG),
      DIALOG_CAPTION: (0, _extends2["default"])({}, S_DIALOG_CAPTION, CSS_RULE.BG_HEADER),
      BROWSER_CAPTION: (0, _extends2["default"])({}, S_BROWSER_CAPTION, CSS_RULE.BG_HEADER),
      OPEN_CLOSE: (0, _extends2["default"])({}, CSS_RULE.BG),
      INPUT_ROOT: (0, _extends2["default"])({}, S_INPUT_ROOT),
      INPUT_DATE: (0, _extends2["default"])({}, S_INPUT_DATE),
      POWERED_BY: (0, _extends2["default"])({}, S_POWERED_BY),
      BT: {
        CL_RAISED_DIV: _CL.CL_BT_RAISED_DIV,
        RAISED: (0, _extends2["default"])({}, S_BT_RAISED, CSS_RULE.BG_HEADER)
      },
      SELECT: {
        ROOT: {
          width: INPUT_WIDTH
        }
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Dialog.Style.js.map