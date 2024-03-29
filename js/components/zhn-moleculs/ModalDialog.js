"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _Dialog = require("../dialogs/Dialog.Style");
var _useModalFocus = _interopRequireDefault(require("../hooks/useModalFocus"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_DIALOG = (0, _crStyle.crContainerBgCn)("dialog"),
  CL_SHOWING = CL_DIALOG + " " + _crStyle.CL_SHOW_POPUP,
  S_ROOT_DIV = {
    position: 'absolute',
    top: '20%',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  S_COMMAND_DIV = {
    float: 'right',
    margin: '16px 4px 10px 0'
  };
const _hClickDialog = evt => {
  evt.stopPropagation();
};
const ModalDialog = _ref => {
  let {
    refFocusFirst,
    refFocusLast,
    isShow,
    isWithButton,
    style,
    caption,
    captionStyle,
    children,
    onKeyDown,
    onClose,
    divBtStyle,
    commandButtons,
    withoutClose,
    isClosePrimary = false
  } = _ref;
  const _refRootDiv = (0, _useModalFocus.default)(isShow),
    _hKeyDown = (0, _useKeyEscape.default)(onClose),
    _className = (0, _crStyle.crCn)([isShow, CL_SHOWING]),
    _showHideStyle = (0, _crStyle.crShowHideStyle)(isShow);
  return (0, _jsxRuntime.jsx)(_FocusTrap.default, {
    refEl: _refRootDiv,
    refFirst: refFocusFirst,
    refLast: refFocusLast,
    style: _showHideStyle,
    children: (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      tabIndex: "0",
      role: "dialog",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: {
        ...S_ROOT_DIV,
        ...style,
        ..._showHideStyle
      },
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)(_BrowserCaption.default, {
        style: captionStyle,
        caption: caption,
        onClose: onClose
      }), (0, _jsxRuntime.jsx)("div", {
        children: children
      }), isWithButton && (0, _jsxRuntime.jsxs)("div", {
        style: {
          ...S_COMMAND_DIV,
          ...divBtStyle
        },
        children: [commandButtons, !withoutClose && (0, _jsxRuntime.jsx)(_RaisedButton.default, {
          isPrimary: isClosePrimary,
          style: _Dialog.S_BT_RAISED,
          caption: "Close",
          onClick: onClose
        }, "_close")]
      })]
    })
  });
};
var _default = exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map