"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useTooltip2 = _interopRequireDefault(require("../hooks/useTooltip"));

var _BtCaption = _interopRequireDefault(require("./BtCaption"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT_FLAT = 'bt-flat',
    CL_BT_FLAT_SPAN = CL_BT_FLAT + "__span";

var ModalButton = function ModalButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      style = _ref.style,
      clDiv = _ref.clDiv,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;

  var _useTooltip = (0, _useTooltip2["default"])(ariaLabel, dataPos),
      _ariaLabel = _useTooltip[0],
      _dataPos = _useTooltip[1];

  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: CL_BT_FLAT,
    style: style,
    accessKey: accessKey,
    onClick: onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: (0, _jsxRuntime.jsx)(_BtCaption["default"], {
        className: CL_BT_FLAT_SPAN,
        caption: caption,
        accessKey: accessKey,
        children: children
      })
    })
  });
};

var _default = ModalButton;
exports["default"] = _default;
//# sourceMappingURL=ModalButton.js.map