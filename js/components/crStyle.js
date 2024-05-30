"use strict";

exports.__esModule = true;
exports.crWithScrollCn = exports.crStyle2 = exports.crShowHideStyle = exports.crShowHide = exports.crPopupMenuCn = exports.crPanelShadowCn = exports.crPaneCn = exports.crInlineBlockShowHide = exports.crContainerBgCn = exports.crCn = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_COLOR_BLACK_DARK = exports.S_COLOR_BLACK = exports.S_BLOCK = exports.COLOR_VAR_H_C = exports.COLOR_BLACK = exports.CL_SHOW_POPUP = exports.CL_SELECT_NONE = exports.CL_ROW_NEWS_SOURCE = exports.CL_MENU_MORE_ITEM = void 0;
var _uiApi = require("./uiApi");
const CL_SELECT_NONE = exports.CL_SELECT_NONE = 'select-none';
const CL_MENU_MORE_ITEM = exports.CL_MENU_MORE_ITEM = "menu-more__item " + CL_SELECT_NONE;
const CL_ROW_NEWS_SOURCE = exports.CL_ROW_NEWS_SOURCE = "row__news-source " + CL_SELECT_NONE;
const COLOR_BLACK = exports.COLOR_BLACK = '#121212';
const S_COLOR_BLACK = exports.S_COLOR_BLACK = {
  color: COLOR_BLACK
};
const S_COLOR_BLACK_DARK = exports.S_COLOR_BLACK_DARK = {
  color: '#0a0a0a'
};
const COLOR_VAR_H_C = exports.COLOR_VAR_H_C = 'var(--h-c, #a9a9a9)';
const S_BLOCK = exports.S_BLOCK = {
  display: 'block'
};
const S_INLINE_BLOCK = exports.S_INLINE_BLOCK = {
  display: 'inline-block'
};
const S_NONE = exports.S_NONE = {
  display: 'none'
};
const _getCn = arrOrStr => (0, _uiApi.isArr)(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1),
    _cl2 = _getCn(conf2);
  return _cl1 ? _cl2 ? _cl1 + " " + _cl2 : _cl1 : _cl2 || void 0;
};
exports.crCn = crCn;
const crStyle2 = (style1, style2) => style2 ? {
  ...style1,
  ...style2
} : style1;
exports.crStyle2 = crStyle2;
const crShowHideStyle = is => is ? S_BLOCK : S_NONE;
exports.crShowHideStyle = crShowHideStyle;
const CL_SHOW_POPUP = exports.CL_SHOW_POPUP = "show-popup";
const _fShowHide = showStyle => (is, cl) => is ? [crCn(cl, CL_SHOW_POPUP), showStyle] : [cl, S_NONE];
const crShowHide = exports.crShowHide = _fShowHide(S_BLOCK);
const crInlineBlockShowHide = exports.crInlineBlockShowHide = _fShowHide(S_INLINE_BLOCK);
const crContainerBgCn = className => crCn(className, "c-bg");
exports.crContainerBgCn = crContainerBgCn;
const crPaneCn = className => crContainerBgCn(crCn("pane", className));
exports.crPaneCn = crPaneCn;
const crPanelShadowCn = className => crCn(className, "panel-shadow");
exports.crPanelShadowCn = crPanelShadowCn;
const crPopupMenuCn = className => crCn(crPanelShadowCn("popup-menu"), className);
exports.crPopupMenuCn = crPopupMenuCn;
const crWithScrollCn = className => crCn(className, "with-scroll");
exports.crWithScrollCn = crWithScrollCn;
//# sourceMappingURL=crStyle.js.map