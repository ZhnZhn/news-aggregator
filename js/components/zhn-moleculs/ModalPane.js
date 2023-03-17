"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _ModalPane = _interopRequireDefault(require("./ModalPane.Style"));
var _jsxRuntime = require("preact/jsx-runtime");
var ModalPane = function ModalPane(_ref) {
  var isShow = _ref.isShow,
    style = _ref.style,
    children = _ref.children,
    onClose = _ref.onClose;
  var _refElement = (0, _useClickOutside["default"])(isShow, onClose),
    _hKeyEscape = (0, _useKeyEscape["default"])(onClose),
    _hKeyDown = isShow ? _hKeyEscape : void 0,
    TS = (0, _useTheme["default"])(_ModalPane["default"]);
  return (0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    ref: _refElement,
    style: (0, _extends2["default"])({}, style, TS.ROOT),
    onKeyDown: _hKeyDown,
    children: children
  });
};
var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map