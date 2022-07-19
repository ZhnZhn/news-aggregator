"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["w", "h", "children"];

var Svg100 = function Svg100(_ref) {
  var w = _ref.w,
      _ref$h = _ref.h,
      h = _ref$h === void 0 ? w : _ref$h,
      children = _ref.children,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 " + w + " " + h,
    preserveAspectRatio: "none"
  }, restProps, {
    children: children
  }));
};

var _default = Svg100;
exports["default"] = _default;
//# sourceMappingURL=Svg100.js.map