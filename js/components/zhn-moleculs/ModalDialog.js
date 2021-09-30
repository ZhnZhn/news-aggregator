"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useClassAnimation2 = _interopRequireDefault(require("../hooks/useClassAnimation"));

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
};
var S2 = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
};
var S = {
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    display: 'block',
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  COMMAND_DIV: {
    "float": 'right',
    marginTop: 16,
    marginBottom: 10,
    marginRight: 4,
    cursor: 'default'
  }
};

var _hasFocusFn = function _hasFocusFn(ref) {
  return typeof ((ref || {}).current || {}).focus === 'function';
};

var _hClickDialog = function _hClickDialog(event) {
  event.stopPropagation();
};

var ModalDialog = function ModalDialog(_ref) {
  var isShow = _ref.isShow,
      isWithButton = _ref.isWithButton,
      style = _ref.style,
      caption = _ref.caption,
      styleCaption = _ref.styleCaption,
      children = _ref.children,
      onKeyDown = _ref.onKeyDown,
      onClose = _ref.onClose,
      divBtStyle = _ref.divBtStyle,
      commandButtons = _ref.commandButtons,
      TS = _ref.styleButton,
      withoutClose = _ref.withoutClose,
      _ref$isClosePrimary = _ref.isClosePrimary,
      isClosePrimary = _ref$isClosePrimary === void 0 ? false : _ref$isClosePrimary;

  var _refRootDiv = (0, _react.useRef)(),
      _refPrevFocused = (0, _react.useRef)(),
      _useClassAnimation = (0, _useClassAnimation2["default"])({
    isShow: isShow,
    CL: CL,
    S: S2,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style,
      _hKeyDown = function _hKeyDown(event) {
    var current = _refRootDiv.current;

    if (document.activeElement == current) {
      onKeyDown(event);
    }
  };

  (0, _react.useEffect)(function () {
    _refPrevFocused.current = document.activeElement;
  }, []);
  (0, _react.useEffect)(function () {
    if (isShow && _refRootDiv) {
      _refRootDiv.current.focus();
    }
  }, [isShow]);
  (0, _react.useEffect)(function () {
    if (_style === S2.HIDING && _hasFocusFn(_refPrevFocused)) {
      _refPrevFocused.current.focus();
    }
  });
  return (
    /*#__PURE__*/

    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/

    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refRootDiv,
      tabIndex: "0",
      role: "dialog",
      "aria-label": caption,
      "aria-hidden": !isShow,
      className: _className,
      style: (0, _extends2["default"])({}, S.ROOT_DIV, style, _style),
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        style: styleCaption,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), isWithButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: (0, _extends2["default"])({}, S.COMMAND_DIV, divBtStyle),
        children: [commandButtons, !withoutClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
          style: TS.RAISED,
          clDiv: TS.CL_RAISED_DIV,
          caption: "Close",
          isPrimary: isClosePrimary,
          onClick: onClose
        }, "_close")]
      })]
    })
  );
};

var _default = ModalDialog;
exports["default"] = _default;
//# sourceMappingURL=ModalDialog.js.map