"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BROWSER_PANE = (0, _crStyle.crPaneCn)("browser-pane");
const Browser = _ref => {
  let {
    isShow,
    style,
    onKeyDown,
    children
  } = _ref;
  const [_cn, _style] = (0, _crStyle.crShowHide)(isShow, CL_BROWSER_PANE);
  return (0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: {
      ...style,
      ..._style
    },
    role: "presentation",
    onKeyDown: onKeyDown,
    children: children
  });
};
var _default = exports.default = Browser;
//# sourceMappingURL=Browser.js.map