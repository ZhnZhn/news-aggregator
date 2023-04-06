"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["isShow", "withoutAnimation", "isScrollable", "className", "style", "children"];
var CL_SHOW_POPUP = 'show-popup',
  S_SHOW = {
    display: 'block'
  },
  S_HIDE = {
    display: 'none'
  };
var ShowHide = function ShowHide(_ref) {
  var isShow = _ref.isShow,
    withoutAnimation = _ref.withoutAnimation,
    isScrollable = _ref.isScrollable,
    className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    className: (0, _crCn["default"])(className, [isShow && !withoutAnimation, CL_SHOW_POPUP]),
    style: (0, _crStyle["default"])(style, isShow ? S_SHOW : S_HIDE),
    "data-scrollable": isScrollable ? "true" : void 0
  }, restProps, {
    children: children
  }));
};
var _default = ShowHide;
exports["default"] = _default;
//# sourceMappingURL=ShowHide.js.map