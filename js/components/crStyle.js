"use strict";

exports.__esModule = true;
exports.crStyle2 = exports.crShowHideStyle = exports.crShowHide = exports.crInlineBlockShowHide = exports.crCn = exports.S_NONE = exports.S_INLINE_BLOCK = exports.S_BLOCK = exports.CL_SHOW_POPUP = void 0;
const _isArr = Array.isArray;
const _getCn = arrOrStr => _isArr(arrOrStr) ? arrOrStr[0] ? arrOrStr[1] : '' : arrOrStr || '';
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
const S_BLOCK = {
  display: 'block'
};
exports.S_BLOCK = S_BLOCK;
const S_INLINE_BLOCK = {
  display: 'inline-block'
};
exports.S_INLINE_BLOCK = S_INLINE_BLOCK;
const S_NONE = {
  display: 'none'
};
exports.S_NONE = S_NONE;
const crShowHideStyle = is => is ? S_BLOCK : S_NONE;
exports.crShowHideStyle = crShowHideStyle;
const CL_SHOW_POPUP = "show-popup";
exports.CL_SHOW_POPUP = CL_SHOW_POPUP;
const _fShowHide = showStyle => (is, cl) => is ? [crCn(cl, CL_SHOW_POPUP), showStyle] : [cl, S_NONE];
const crShowHide = _fShowHide(S_BLOCK);
exports.crShowHide = crShowHide;
const crInlineBlockShowHide = _fShowHide(S_INLINE_BLOCK);
exports.crInlineBlockShowHide = crInlineBlockShowHide;
//# sourceMappingURL=crStyle.js.map