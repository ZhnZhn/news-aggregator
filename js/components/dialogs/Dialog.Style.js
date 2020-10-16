"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var INPUT_WIDTH = 240;
var S = {
  BROWSER_CAPTION: {
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    paddingTop: 5,
    marginBottom: 0,
    textAlign: 'center',
    fontSize: '1.125rem'
  },
  BT_RAISED_ROOT: {
    marginRight: 2,
    marginLeft: 2
  },
  INPUT_ROOT: {
    width: INPUT_WIDTH,
    display: 'block'
  },
  INPUT_DATE: {
    display: 'inline-block',
    width: 110
  },
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};
var styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: function createStyle(CSS_RULE, themeName) {
    return {
      R_DIALOG: (0, _extends2["default"])({}, CSS_RULE.R_DIALOG),
      BROWSER_CAPTION: (0, _extends2["default"])({}, S.BROWSER_CAPTION, CSS_RULE.BG_HEADER),
      INPUT_ROOT: (0, _extends2["default"])({}, S.INPUT_ROOT),
      INPUT_DATE: (0, _extends2["default"])({}, S.INPUT_DATE),
      POWERED_BY: (0, _extends2["default"])({}, S.POWERED_BY),
      BT: {
        CL_RAISED_DIV: CSS_RULE.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends2["default"])({}, S.BT_RAISED_ROOT, CSS_RULE.BG_HEADER)
      },
      SELECT: {
        CL_ITEM: CSS_RULE.CL_SELECT_ITEM,
        ROOT: {
          width: INPUT_WIDTH
        },
        MODAL_PANE: (0, _extends2["default"])({}, CSS_RULE.BG)
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Dialog.Style.js.map