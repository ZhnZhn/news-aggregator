"use strict";

exports.__esModule = true;
exports.default = void 0;
var _CL = require("../styles/CL");
//color: #009ae5 - header_browser

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (CSS_RULE, themeName) => {
    return {
      CL_ROW: _CL.CL_ROW_NEWS_SOURCE,
      BROWSER: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      },
      BADGE: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
};
var _default = styleConfig;
exports.default = _default;
//# sourceMappingURL=NewsBrowser.Style.js.map