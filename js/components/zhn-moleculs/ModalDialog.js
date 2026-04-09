"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _Dialog = require("../dialogs/Dialog.Style");
var _useModalFocus = _interopRequireDefault(require("../hooks/useModalFocus"));
var _FocusTrap = _interopRequireDefault(require("./FocusTrap"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SHOWING = `${_crStyle.CL_DIALOG} ${_crStyle.CL_SHOW_POPUP}`,
  S_ROOT_DIV = {
    top: '20%',
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
    onClose,
    divBtStyle,
    commandButtons,
    withoutClose,
    isClosePrimary = false
  } = _ref;
  const _refRootDiv = (0, _useModalFocus.default)(isShow),
    _className = (0, _crStyle.crCn)([isShow, CL_SHOWING]),
    _showHideStyle = (0, _crStyle.crShowHideStyle)(isShow),
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      const evtKey = evt.key;
      if (evtKey === _uiApi.KEY_ARROW_DOWN || evtKey === _uiApi.KEY_ARROW_UP) {
        evt.preventDefault();
      } else if (evtKey === _uiApi.KEY_ESCAPE) {
        onClose();
      }
    }, [onClose]);
  return (0, _jsxRuntime.jsx)(_FocusTrap.default, {
    refEl: _refRootDiv,
    refFirst: refFocusFirst,
    refLast: refFocusLast,
    style: _showHideStyle,
    children: (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      role: "dialog",
      tabIndex: "0",
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