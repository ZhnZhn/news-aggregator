"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuItem = (0, _uiApi.forwardRef)((_ref, ref) => {
  let {
    className,
    style,
    caption,
    children,
    onClick
  } = _ref;
  const _hKeyDown = (0, _useKeyEnter.default)(onClick);
  return (0, _jsxRuntime.jsx)("div", {
    ref: ref,
    role: "menuitem",
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption || children
  });
});
var _default = MenuItem;
exports.default = _default;
//# sourceMappingURL=MenuItem.js.map