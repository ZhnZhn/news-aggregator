"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _BtCaption = _interopRequireDefault(require("./BtCaption"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_BT_FLAT = 'bt-flat';
var CL_BT_FLAT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var ariaLabel = _ref.ariaLabel,
      dataPos = _ref.dataPos,
      className = _ref.className,
      style = _ref.style,
      clDiv = _ref.clDiv,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return (0, _jsxRuntime.jsx)("button", {
    "aria-label": ariaLabel,
    "data-pos": dataPos,
    className: (0, _crCn["default"])(CL_BT_FLAT, className),
    style: style,
    accessKey: accessKey,
    onClick: onClick,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [caption ? (0, _jsxRuntime.jsx)(_BtCaption["default"], {
        className: CL_BT_FLAT_SPAN,
        caption: caption,
        accessKey: accessKey
      }) : null, children]
    })
  });
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map