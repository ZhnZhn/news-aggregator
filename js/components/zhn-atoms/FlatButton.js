"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _CaptionInput = _interopRequireDefault(require("./CaptionInput"));

var CL_BT = 'bt-flat';
var CL_BT_SPAN = 'bt-flat__span';

var FlatButton = function FlatButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_BT + " " + className,
    style: rootStyle,
    type: "button",
    tabIndex: 0,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: clDiv,
      children: [caption ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_CaptionInput["default"], {
        className: CL_BT_SPAN,
        caption: caption,
        accessKey: accessKey
      }) : null, children]
    })
  });
};

var _default = FlatButton;
exports["default"] = _default;
//# sourceMappingURL=FlatButton.js.map