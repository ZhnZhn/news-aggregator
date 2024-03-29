"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _ModalPane = _interopRequireDefault(require("./ModalPane"));
var _jsxRuntime = require("preact/jsx-runtime");
const ModalPopup = _ref => {
  let {
    isShow,
    className,
    style,
    onClose,
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide.default, {
      className: className,
      style: style,
      isShow: isShow,
      children: children
    })
  });
};
var _default = exports.default = ModalPopup;
//# sourceMappingURL=ModalPopup.js.map