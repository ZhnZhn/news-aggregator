"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_WITH_SCROLL = 'with-scroll';

var ScrollPane = function ScrollPane(_ref) {
  var style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var _cn = (0, _crCn["default"])(CL_WITH_SCROLL, className);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: style,
    children: children
  });
};

var _default = ScrollPane;
exports["default"] = _default;
//# sourceMappingURL=ScrollPane.js.map