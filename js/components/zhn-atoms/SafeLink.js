"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _toLink = _interopRequireDefault(require("../zhn-utils/toLink"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "style", "href", "children"];

var SafeLink = function SafeLink(_ref) {
  var className = _ref.className,
      style = _ref.style,
      href = _ref.href,
      children = _ref.children,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _href = (0, _toLink["default"])(href);

  return _href ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", (0, _extends2["default"])({
    className: className,
    style: style
  }, restProps, {
    href: _href,
    target: "_blank",
    children: children
  })) : null;
};

var _default = SafeLink;
exports["default"] = _default;
//# sourceMappingURL=SafeLink.js.map