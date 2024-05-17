"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuItem = _ref => {
  let {
    refEl,
    className,
    style,
    caption,
    children,
    onClick
  } = _ref;
  const _hKeyDown = (0, _useKeyEnter.default)(onClick);
  return (0, _jsxRuntime.jsx)("div", {
    ref: refEl,
    role: "menuitem",
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption || children
  });
};
var _default = exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map