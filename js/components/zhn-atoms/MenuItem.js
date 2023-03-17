"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _jsxRuntime = require("preact/jsx-runtime");
var FN_NOOP = function FN_NOOP() {};
var MenuItem = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    caption = _ref.caption,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? FN_NOOP : _ref$onClick;
  var _hKeyDown = (0, _useKeyEnter["default"])(onClick);
  return (0, _jsxRuntime.jsx)("div", {
    ref: ref,
    role: "menuitem",
    className: className,
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption
  });
});
var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=MenuItem.js.map