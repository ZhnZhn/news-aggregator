'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _useClassAnimation2 = require('../zhn-hooks/useClassAnimation');

var _useClassAnimation3 = _interopRequireDefault(_useClassAnimation2);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
};
//import PropTypes from 'prop-types'

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
    float: 'right',
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
      isClosePrimary = _ref$isClosePrimary === undefined ? false : _ref$isClosePrimary;
  var _refRootDiv = (0, _react.useRef)(),
      _refPrevFocused = (0, _react.useRef)(),
      _useClassAnimation = (0, _useClassAnimation3.default)({
    isShow: isShow, CL: CL, S: S2,
    initialWasClosed: false
  }),
      _className = _useClassAnimation.className,
      _style = _useClassAnimation.style,
      _hKeyDown = (0, _react.useCallback)(function (event) {
    if (document.activeElement == _refRootDiv.current) {
      onKeyDown(event);
    }
  });


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

  return _react2.default.createElement(
    'div',
    {
      ref: _refRootDiv,
      tabIndex: '0',
      className: _className,
      style: (0, _extends3.default)({}, S.ROOT_DIV, style, _style),
      onClick: _hClickDialog,
      onKeyDown: _hKeyDown
    },
    _react2.default.createElement(_BrowserCaption2.default, {
      rootStyle: styleCaption,
      caption: caption,
      onClose: onClose
    }),
    _react2.default.createElement(
      'div',
      null,
      children
    ),
    isWithButton && _react2.default.createElement(
      'div',
      { style: (0, _extends3.default)({}, S.COMMAND_DIV, divBtStyle) },
      commandButtons,
      !withoutClose && _react2.default.createElement(_RaisedButton2.default, {
        key: '_close',
        rootStyle: TS.RAISED_ROOT,
        clDiv: TS.CL_RAISED_DIV,
        caption: 'Close',
        isPrimary: isClosePrimary,
        onClick: onClose
      })
    )
  );
};

exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map