"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _ModalPane = _interopRequireDefault(require("./ModalPane"));

var ModalPopup = function ModalPopup(_ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      onClose = _ref.onClose,
      children = _ref.children;
  return _react["default"].createElement(_ModalPane["default"], {
    isShow: isShow,
    onClose: onClose
  }, _react["default"].createElement(_ShowHide["default"], {
    className: className,
    style: style,
    isShow: isShow
  }, children));
};

var _default = ModalPopup;
exports["default"] = _default;
//# sourceMappingURL=ModalPopup.js.map