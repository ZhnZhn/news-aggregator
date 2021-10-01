"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _useRegRef = _interopRequireDefault(require("../hooks/useRegRef"));

var _BtCaption = _interopRequireDefault(require("./BtCaption"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT_FLAT = 'bt-flat';
var CL_BT_FLAT_SPAN = 'bt-flat__span';

var ModalButton = function ModalButton(_ref) {
  var style = _ref.style,
      clDiv = _ref.clDiv,
      title = _ref.title,
      caption = _ref.caption,
      accessKey = _ref.accessKey,
      children = _ref.children,
      onReg = _ref.onReg,
      onClick = _ref.onClick;

  var _refBtNode = (0, _useRegRef["default"])(onReg);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ref: _refBtNode,
    className: CL_BT_FLAT,
    style: style,
    title: title,
    accessKey: accessKey,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BtCaption["default"], {
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