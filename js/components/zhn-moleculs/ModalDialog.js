"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SHOWING = 'dialog show-popup',
  S_ROOT_DIV = {
    position: 'absolute',
    top: '20%',
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  S_COMMAND_DIV = {
    float: 'right',
    margin: '16px 4px 10px 0'
  },
  S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
const _hClickDialog = event => {
  event.stopPropagation();
};

/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
const TrapDiv = _ref => {
  let {
    onFocus
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    tabIndex: "0",
    "aria-hidden": "true",
    onFocus: onFocus
  });
};
/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/

const ModalDialog = _ref2 => {
  let {
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
    buttonStyle: TS,
    withoutClose,
    isClosePrimary = false
  } = _ref2;
  const _refRootDiv = (0, _uiApi.useRef)(),
    _refPrevFocused = (0, _uiApi.useRef)(),
    _hKeyDown = (0, _useKeyEscape.default)(onClose),
    _className = (0, _crCn.default)([isShow, CL_SHOWING]),
    _style = isShow ? S_BLOCK : S_NONE,
    _onFocusTrapDiv = () => {
      if (isShow) {
        (0, _uiApi.focusRefElement)(_refRootDiv);
      }
    };
  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevFocused, (document || {}).activeElement);
    }
  }, [isShow]);
  (0, _uiApi.useEffect)(() => {
    const _refEl = isShow ? _refRootDiv : _refPrevFocused;
    (0, _uiApi.focusRefElement)(_refEl);
  }, [isShow]);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(TrapDiv, {
      onFocus: _onFocusTrapDiv
    }), (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      tabIndex: "0",
      role: "dialog",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: {
        ...S_ROOT_DIV,
        ...style,
        ..._style
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
          style: TS.RAISED,
          clDiv: TS.CL_RAISED_DIV,
          caption: "Close",
          isPrimary: isClosePrimary,
          onClick: onClose
        }, "_close")]
      })]
    }), (0, _jsxRuntime.jsx)(TrapDiv, {
      onFocus: _onFocusTrapDiv
    })]
  });
};
var _default = ModalDialog;
exports.default = _default;
//# sourceMappingURL=ModalDialog.js.map