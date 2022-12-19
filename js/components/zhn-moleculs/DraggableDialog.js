"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _useXYMovable = _interopRequireDefault(require("../hooks/useXYMovable"));
var _ModalToggle = _interopRequireDefault(require("./ModalToggle"));
var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

var CL_DIALOG = 'dialog',
  CL_DIALOG_OPEN = CL_DIALOG + " show-popup",
  CL_MODAL_TOGGLE = 'popup-menu menu-more__item select-none',
  S_DIV = {
    position: 'absolute',
    top: 30,
    left: 50,
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  S_BTS = {
    textAlign: 'right',
    margin: '16px 4px 10px 0'
  },
  S_BLOCK = {
    display: 'block'
  },
  S_NONE = {
    display: 'none'
  };
var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};
var DialogButtons = function DialogButtons(_ref) {
  var TS = _ref.TS,
    onLoad = _ref.onLoad,
    onShow = _ref.onShow,
    onClose = _ref.onClose;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_BTS,
    children: [_isFn(onLoad) && (0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      isPrimary: true,
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Load",
      onClick: onLoad
    }), _isFn(onShow) && (0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Show",
      onClick: onShow
    }), (0, _jsxRuntime.jsx)(_RaisedButton["default"], {
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Close",
      onClick: onClose
    })]
  });
};
var DraggableDialog = (0, _uiApi.forwardRef)(function (_ref2, ref) {
  var isShow = _ref2.isShow,
    style = _ref2.style,
    captionStyle = _ref2.captionStyle,
    buttonStyle = _ref2.buttonStyle,
    chbStroke = _ref2.chbStroke,
    caption = _ref2.caption,
    menuToggle = _ref2.menuToggle,
    toggleItem = _ref2.toggleItem,
    children = _ref2.children,
    onKeyDown = _ref2.onKeyDown,
    onLoad = _ref2.onLoad,
    onShow = _ref2.onShow,
    onClose = _ref2.onClose;
  var _refDialog = (0, _uiApi.useRef)(null),
    _refPrevFocused = (0, _uiApi.useRef)(null),
    _refIsShow = (0, _uiApi.useRef)(isShow),
    _useToggle = (0, _useToggle2["default"])(false),
    isMore = _useToggle[0],
    toggleIsMore = _useToggle[1],
    _useMemo = (0, _uiApi.useMemo)(function () {
      return [function () {
        return (0, _uiApi.focusRefElement)(_refDialog);
      }, function () {
        return (0, _uiApi.focusRefElement)(_refPrevFocused);
      }, function (evt) {
        if (document.activeElement == (0, _uiApi.getRefValue)(_refDialog)) {
          onKeyDown(evt);
        }
      }, function (evt) {
        focusPrevEl();
        onClose();
      }];
    }, []),
    focusDialogEl = _useMemo[0],
    focusPrevEl = _useMemo[1],
    _hKeyDown = _useMemo[2],
    _hClose = _useMemo[3];

  // onKeyDown
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    (0, _uiApi.setRefValue)(_refPrevFocused, document.activeElement);
    focusDialogEl();
  }, []);
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useXYMovable["default"])(_refDialog);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (isShow && !(0, _uiApi.getRefValue)(_refIsShow)) {
      focusDialogEl();
    }
    (0, _uiApi.setRefValue)(_refIsShow, isShow);
  }, [isShow]);
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      focusPrevEl: focusPrevEl
    };
  });
  var _ref3 = isShow ? [S_BLOCK, CL_DIALOG_OPEN] : [S_NONE, CL_DIALOG],
    _styleShow = _ref3[0],
    _classShow = _ref3[1],
    _onMore = menuToggle ? toggleIsMore : void 0;
  return (/*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refDialog,
      role: "dialog",
      className: _classShow,
      style: (0, _extends2["default"])({}, S_DIV, style, _styleShow),
      tabIndex: "0",
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        style: captionStyle,
        caption: caption,
        onMore: _onMore,
        onClose: onClose
      }), menuToggle && (0, _jsxRuntime.jsx)(_ModalToggle["default"], {
        isShow: isMore,
        className: CL_MODAL_TOGGLE,
        chbStroke: chbStroke,
        configs: menuToggle,
        onToggle: toggleItem,
        onClose: toggleIsMore
      }), (0, _jsxRuntime.jsx)("div", {
        children: children
      }), (0, _jsxRuntime.jsx)(DialogButtons, {
        TS: buttonStyle,
        onLoad: onLoad,
        onShow: onShow,
        onClose: _hClose
      })]
    })
  );
});

/*
DraggableDialog.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  captionStyle: PropTypes.object,
  styleButton: PropTypes.object,
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onKeyDown: PropTypes.func,
  onLoad: PropTypes.func,
  onShow: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map