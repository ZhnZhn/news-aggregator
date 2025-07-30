"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _useClickOutside = _interopRequireDefault(require("../hooks/useClickOutside"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MODAL_PANE = (0, _crStyle.crContainerBgCn)();
const ModalPane = _ref => {
  let {
    isShow,
    className,
    style,
    children,
    onClose,
    ...restProps
  } = _ref;
  const _refElement = (0, _useClickOutside.default)(isShow, onClose),
    _hKeyEscape = (0, _useKeyEscape.default)(onClose);

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (0, _jsxRuntime.jsx)("div", {
    ...restProps,
    ref: _refElement,
    className: (0, _crStyle.crCn)(CL_MODAL_PANE, className),
    style: (0, _crStyle.crStyle2)(style, isShow ? void 0 : _crStyle.S_NONE),
    onKeyDown: isShow ? _hKeyEscape : void 0,
    children: children
  })
  /*eslint-enable jsx-a11y/no-static-element-interactions*/;
};
var _default = exports.default = ModalPane;
//# sourceMappingURL=ModalPane.js.map