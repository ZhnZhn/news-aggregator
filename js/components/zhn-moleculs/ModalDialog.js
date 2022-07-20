"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));

var _useKeyEscape = _interopRequireDefault(require("../hooks/useKeyEscape"));

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SHOWING = 'dialog show-popup',
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
  "float": 'right',
  margin: '16px 4px 10px 0'
},
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var _focusRefElement = function _focusRefElement(ref) {
  var _ref = ref || {},
      current = _ref.current;

  if (typeof (current || {}).focus === 'function') {
    current.focus();
  }
};

var _hClickDialog = function _hClickDialog(event) {
  event.stopPropagation();
};

var ModalDialog = function ModalDialog(_ref2) {
  var isShow = _ref2.isShow,
      isWithButton = _ref2.isWithButton,
      style = _ref2.style,
      caption = _ref2.caption,
      captionStyle = _ref2.captionStyle,
      children = _ref2.children,
      onKeyDown = _ref2.onKeyDown,
      onClose = _ref2.onClose,
      divBtStyle = _ref2.divBtStyle,
      commandButtons = _ref2.commandButtons,
      TS = _ref2.buttonStyle,
      withoutClose = _ref2.withoutClose,
      _ref2$isClosePrimary = _ref2.isClosePrimary,
      isClosePrimary = _ref2$isClosePrimary === void 0 ? false : _ref2$isClosePrimary;

  var _refRootDiv = (0, _uiApi.useRef)(),
      _refPrevFocused = (0, _uiApi.useRef)(),
      _hKeyDown = (0, _useKeyEscape["default"])(onClose),
      _className = (0, _crCn["default"])([isShow, CL_SHOWING]),
      _style = isShow ? S_BLOCK : S_NONE;

  (0, _uiApi.useEffect)(function () {
    _refPrevFocused.current = (document || {}).activeElement;
  }, []);
  (0, _uiApi.useEffect)(function () {
    var _refEl = isShow ? _refRootDiv : _refPrevFocused;

    _focusRefElement(_refEl);
  }, [isShow]);
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
      style: (0, _extends2["default"])({}, S_ROOT_DIV, style, _style),
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        style: captionStyle,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: children
      }), isWithButton && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: (0, _extends2["default"])({}, S_COMMAND_DIV, divBtStyle),
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