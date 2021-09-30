"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT_FLAT = 'bt-flat';
var CL_BT_FLAT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var className = _ref.className,
      style = _ref.style,
      clDiv = _ref.clDiv,
      title = _ref.title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: (0, _crCn["default"])(CL_BT_FLAT, className),
    style: style,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [caption ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
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