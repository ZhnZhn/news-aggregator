"use strict";

exports.__esModule = true;
exports.crStyle2 = exports.crShowHideStyle = exports.S_NONE = exports.S_BLOCK = void 0;
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
//# sourceMappingURL=crStyle.js.map