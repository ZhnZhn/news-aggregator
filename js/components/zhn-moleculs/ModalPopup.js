"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _ModalPane = _interopRequireDefault(require("./ModalPane"));

var _jsxRuntime = require("react/jsx-runtime");

var ModalPopup = function ModalPopup(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      onClose = _ref.onClose,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      className: className,
      style: style,
      isShow: isShow,
      children: children
    })
  });
};

var _default = ModalPopup;
exports["default"] = _default;
//# sourceMappingURL=ModalPopup.js.map