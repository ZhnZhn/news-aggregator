"use strict";

exports.__esModule = true;
exports.TextSpan = exports.TextDiv = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const _fTextToken = Comp => _ref => {
  let {
    className,
    style,
    text
  } = _ref;
  return text ? (0, _jsxRuntime.jsx)(Comp, {
    className: className,
    style: style,
    children: text
  }) : null;
};
const TextDiv = exports.TextDiv = _fTextToken("div");
const TextSpan = exports.TextSpan = _fTextToken("span");
//# sourceMappingURL=TextToken.js.map