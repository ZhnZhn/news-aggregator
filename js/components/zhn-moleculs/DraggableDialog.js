"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _Interact = _interopRequireDefault(require("../../utils/Interact"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_DIALOG = 'dialog';
var CL_DIALOG_OPEN = 'dialog show-popup';
var S = {
  DIV: {
    position: 'absolute',
    top: 30,
    left: 50,
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CHL_DIV: {
    cursor: 'default'
  },
  BTS: {
    marginTop: 16,
    marginBottom: 10,
    marginRight: 4,
    "float": 'right',
    cursor: 'default'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var DialogButtons = function DialogButtons(_ref) {
  var TS = _ref.TS,
      buttons = _ref.buttons,
      onShow = _ref.onShow,
      onClose = _ref.onClose;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.BTS,
    children: [buttons, _isFn(onShow) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Show",
      onClick: onShow
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Close",
      onClick: onClose
    })]
  });
};

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var _setRefValue = function _setRefValue(ref, value) {
  return ref.current = value;
};
/*eslint-disable react-hooks/exhaustive-deps */


var useFocusByRef = function useFocusByRef(ref) {
  return (0, _react.useCallback)(function () {
    var _node = _getRefValue(ref);

    if (_node) {
      _node.focus();
    }
  }, []);
}; //ref

/*eslint-enable react-hooks/exhaustive-deps */


var DraggableDialog = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var isShow = _ref2.isShow,
      rootStyle = _ref2.rootStyle,
      browserCaptionStyle = _ref2.browserCaptionStyle,
      styleButton = _ref2.styleButton,
      caption = _ref2.caption,
      commandButtons = _ref2.commandButtons,
      children = _ref2.children,
      onKeyDown = _ref2.onKeyDown,
      onShowChart = _ref2.onShowChart,
      onClose = _ref2.onClose;

  var _refDiv = (0, _react.useRef)(null),
      _refIsShow = (0, _react.useRef)(isShow),
      _refPrevFocused = (0, _react.useRef)(null),
      focusPrevEl = useFocusByRef(_refPrevFocused),
      focus = useFocusByRef(_refDiv)
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _hKeyDown = (0, _react.useCallback)(function (evt) {
    if (document.activeElement == _getRefValue(_refDiv)) {
      onKeyDown(evt);
    }
  }, []) //onKeyDown
  ,
      _hClose = (0, _react.useCallback)(function (evt) {
    focusPrevEl();
    onClose();
  }, []); //_focusPrevEl, onClose

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(function () {
    var _divNode = _getRefValue(_refDiv);

    _Interact["default"].makeDragable(_divNode);

    _setRefValue(_refPrevFocused, document.activeElement);

    _divNode.focus();
  }, []);
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _react.useEffect)(function () {
    if (isShow && !_getRefValue(_refIsShow)) {
      focus();
    }

    _setRefValue(_refIsShow, isShow);
  }, [isShow]); // focus

  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      focusPrevEl: focusPrevEl
    };
  });

  var _styleShow = isShow ? S.BLOCK : S.NONE,
      _classShow = isShow ? CL_DIALOG_OPEN : CL_DIALOG;

  return (
    /*#__PURE__*/

    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/

    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refDiv,
      role: "dialog",
      className: _classShow,
      style: (0, _extends2["default"])({}, S.DIV, rootStyle, _styleShow),
      tabIndex: "0",
      onKeyDown: _hKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        style: browserCaptionStyle,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.CHL_DIV,
        children: children
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DialogButtons, {
        TS: styleButton,
        buttons: commandButtons,
        onShow: onShowChart,
        onClose: _hClose
      })]
    })
  );
});
/*
DraggableDialog.propTypes = {
  isShow: PropTypes.bool,
  rootStyle: PropTypes.object,
  browserCaptionStyle: PropTypes.object,
  styleButton: PropTypes.object,
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  commandButtons: PropTypes.arrayOf(PropTypes.element),
  onKeyDown: PropTypes.func,
  onShowChart: PropTypes.func,
  onClose: PropTypes.func
}
*/

var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map