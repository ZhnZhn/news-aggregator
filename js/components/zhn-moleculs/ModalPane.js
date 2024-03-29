"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MODAL_PANE = (0, _crStyle.crContainerBgCn)();
const ModalPane = _ref => {
  let {
    isShow,
    style,
    children,
    onClose
  } = _ref;
  const _refElement = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _useKeyEscape.default)(onClose);
  return (0, _jsxRuntime.jsx)("div", {
    role: "presentation",
    "aria-hidden": !isShow,
    ref: _refElement,
    className: CL_MODAL_PANE,
    style: style,
    onKeyDown: isShow ? _hKeyEscape : void 0,
    children: children
  });
};
var _default = ModalPane;
exports.default = _default;
//# sourceMappingURL=ModalPane.js.map