"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useButton = _interopRequireDefault(require("./useButton"));
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_FLAT = 'bt-flat',
  CL_BT_FLAT_DIV = CL_BT_FLAT + "__div",
  CL_BT_FLAT_SPAN = CL_BT_FLAT + "__span";
const ModalButton = _ref => {
  let {
    ariaLabel,
    dataPos,
    style,
    caption,
    hotKey,
    children,
    onClick
  } = _ref;
  const [_ariaLabel, _dataPos] = (0, _useButton.default)(ariaLabel, dataPos, hotKey, onClick);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: CL_BT_FLAT,
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_BT_FLAT_DIV,
      children: (0, _jsxRuntime.jsx)(_BtCaption.default, {
        className: CL_BT_FLAT_SPAN,
        caption: caption,
        hotKey: hotKey,
        children: children
      })
    })
  });
};
var _default = ModalButton;
exports.default = _default;
//# sourceMappingURL=ModalButton.js.map