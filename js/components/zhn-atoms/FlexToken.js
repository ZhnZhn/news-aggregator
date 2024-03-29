"use strict";

exports.__esModule = true;
exports.InlineFlexStart = exports.FlexColumn = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const _fFlexToken = style => _ref => {
  let {
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    children: children
  });
};
const S_FLEX_COLUMN = {
  display: 'flex',
  flexDirection: 'column'
};
const FlexColumn = exports.FlexColumn = _fFlexToken(S_FLEX_COLUMN);
const S_INLINE_FLEX_START = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  maxHeight: '1.7rem'
};
const InlineFlexStart = exports.InlineFlexStart = _fFlexToken(S_INLINE_FLEX_START);
//# sourceMappingURL=FlexToken.js.map