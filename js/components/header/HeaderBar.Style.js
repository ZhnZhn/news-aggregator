"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: function createStyle(CSS_RULE) {
    return {
      CL_QUERY_ITEM: CSS_RULE.CL_QUERY_ITEM,
      HEADER: (0, _extends3.default)({}, CSS_RULE.BG),
      PANE: (0, _extends3.default)({}, CSS_RULE.BG),
      BT: {
        FLAT_ROOT: {
          color: CSS_RULE.BG_HEADER.backgroundColor
        },
        CL_FLAT_DIV: CSS_RULE.CL_BT_FLAT_DIV
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\HeaderBar.Style.js.map