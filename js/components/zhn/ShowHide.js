"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const ShowHide = _ref => {
  let {
    isShow,
    withoutAnimation,
    isScrollable,
    className,
    style,
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    className: (0, _crStyle.crCn)(className, [isShow && !withoutAnimation, _crStyle.CL_SHOW_POPUP]),
    style: (0, _crStyle.crStyle2)(style, isShow ? _crStyle.S_BLOCK : _crStyle.S_NONE),
    "data-scrollable": isScrollable ? "true" : void 0,
    ...restProps,
    children: children
  });
};
var _default = exports.default = ShowHide;
//# sourceMappingURL=ShowHide.js.map