"use strict";

exports.__esModule = true;
exports.styleConfig = exports.S_SCROLL_DIV = exports.S_MT_8 = exports.S_LH_18 = exports.S_LH_14 = exports.S_DIV_WRAPPER = exports.S_BLACK = exports.S_APP_TITLE = void 0;
const S_SCROLL_DIV = {
  height: '92%',
  paddingTop: 8,
  paddingRight: 10,
  overflowY: 'auto'
};
exports.S_SCROLL_DIV = S_SCROLL_DIV;
const S_DIV_WRAPPER = {
  color: 'black',
  paddingLeft: 12,
  paddingRight: 5,
  lineHeight: 1.4,
  fontWeight: 'bold'
};
exports.S_DIV_WRAPPER = S_DIV_WRAPPER;
const S_LH_14 = {
  lineHeight: 1.4
};
exports.S_LH_14 = S_LH_14;
const S_LH_18 = {
  lineHeight: 1.8
};
exports.S_LH_18 = S_LH_18;
const S_APP_TITLE = {
  color: '#80c040'
};
exports.S_APP_TITLE = S_APP_TITLE;
const S_BLACK = {
  color: 'black'
};
exports.S_BLACK = S_BLACK;
const S_MT_8 = {
  marginTop: 8
};
exports.S_MT_8 = S_MT_8;
const styleConfig = {
  //themeName : void 0,
  //style : void 0,
  createStyle: CSS_RULE => {
    return {
      ROOT: {
        ...CSS_RULE.BG
      },
      BROWSER_CAPTION: {
        ...CSS_RULE.BG_HEADER
      }
    };
  }
};
exports.styleConfig = styleConfig;
//# sourceMappingURL=About.Style.js.map