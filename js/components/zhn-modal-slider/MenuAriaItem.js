"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));

var _jsxRuntime = require("react/jsx-runtime");

var MenuAriaItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      onClick = _ref.onClick,
      onReg = _ref.onReg;

  var _hKeyDown = (0, _useKeyEnter["default"])(onClick);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    className: className,
    style: style,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: children
  });
});
/*
MenuAriaItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  onReg: PropTypes.func
}
*/

var _default = MenuAriaItem;
exports["default"] = _default;
//# sourceMappingURL=MenuAriaItem.js.map