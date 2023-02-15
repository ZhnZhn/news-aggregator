"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _useButton2 = _interopRequireDefault(require("./useButton"));
var _BtCaption = _interopRequireDefault(require("./BtCaption"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_BT_FLAT = 'bt-flat',
  CL_BT_FLAT_SPAN = CL_BT_FLAT + "__span";
var FlatButton = function FlatButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
    dataPos = _ref.dataPos,
    className = _ref.className,
    style = _ref.style,
    clDiv = _ref.clDiv,
    caption = _ref.caption,
    hotKey = _ref.hotKey,
    children = _ref.children,
    onClick = _ref.onClick;
  var _useButton = (0, _useButton2["default"])(ariaLabel, dataPos, hotKey, onClick),
    _ariaLabel = _useButton[0],
    _dataPos = _useButton[1];
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: (0, _crCn["default"])(CL_BT_FLAT, className),
    style: style,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [caption ? (0, _jsxRuntime.jsx)(_BtCaption["default"], {
        className: CL_BT_FLAT_SPAN,
        caption: caption,
        hotKey: hotKey
      }) : null, children]
    })
  });
};
var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map