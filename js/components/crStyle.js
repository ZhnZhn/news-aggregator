"use strict";

exports.__esModule = true;
exports.crStyle2 = exports.crShowHideTuple = exports.crShowHideStyle = exports.crCn = exports.S_NONE = exports.S_BLOCK = void 0;
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
const S_NONE = {
  display: 'none'
};
exports.S_NONE = S_NONE;
const crShowHideStyle = is => is ? S_BLOCK : S_NONE;
exports.crShowHideStyle = crShowHideStyle;
const CL_SHOW = "show-popup";
const crShowHideTuple = (is, cl) => is ? [crCn(cl, CL_SHOW), S_BLOCK] : [cl, S_NONE];
exports.crShowHideTuple = crShowHideTuple;
//# sourceMappingURL=crStyle.js.map