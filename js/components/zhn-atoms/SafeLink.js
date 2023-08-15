"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const SafeLink = _ref => {
  let {
    className,
    style,
    href,
    children,
    ...restProps
  } = _ref;
  const _href = (0, _uiApi.toLink)(href);
  return _href ? (0, _jsxRuntime.jsx)("a", {
    className: className,
    style: style,
    ...restProps,
    href: _href,
    target: "_blank",
    children: children
  }) : null;
};
var _default = SafeLink;
exports.default = _default;
//# sourceMappingURL=SafeLink.js.map