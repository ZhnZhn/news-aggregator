"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _crStyle = require("../crStyle");
var _Dialog = require("../dialogs/Dialog.Style");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _useXYMovable = _interopRequireDefault(require("../hooks/useXYMovable"));
var _useRefHotKey = _interopRequireDefault(require("../hotkeys/useRefHotKey"));
var _ModalToggle = _interopRequireDefault(require("./ModalToggle"));
var _BrowserCaption = _interopRequireDefault(require("../zhn/BrowserCaption"));
var _RaisedButton = _interopRequireDefault(require("../zhn-bt/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const CL_DIALOG = (0, _crStyle.crContainerBgCn)("dialog"),
  CL_MODAL_TOGGLE = (0, _crStyle.crPopupMenuCn)("select-none"),
  POSITION_LEFT = _has.HAS_WIDE_SCREEN ? 50 : 15,
  S_DIV = {
    position: 'absolute',
    top: 30,
    left: POSITION_LEFT,
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  S_BTS = {
    textAlign: 'right',
    margin: '16px 4px 10px 0'
  },
  HK_LOAD = 'L',
  HK_SHOW = 'H',
  HK_CLOSE = 'C';
const DialogButtons = _ref => {
  let {
    onLoad,
    onShow,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_BTS,
    children: [(0, _uiApi.isFn)(onLoad) && (0, _jsxRuntime.jsx)(_RaisedButton.default, {
      isPrimary: true,
      style: _Dialog.S_BT_RAISED,
      caption: "Load",
      hotKey: HK_LOAD,
      onClick: onLoad
    }), (0, _uiApi.isFn)(onShow) && (0, _jsxRuntime.jsx)(_RaisedButton.default, {
      style: _Dialog.S_BT_RAISED,
      caption: "Show",
      hotKey: HK_SHOW,
      onClick: onShow
    }), (0, _jsxRuntime.jsx)(_RaisedButton.default, {
      style: _Dialog.S_BT_RAISED,
      caption: "Close",
      hotKey: HK_CLOSE,
      onClick: onClose
    })]
  });
};
const DraggableDialog = _ref2 => {
  let {
    refEl,
    isShow,
    style,
    captionStyle,
    caption,
    menuToggle,
    toggleItem,
    children,
    onKeyDown,
    onLoad,
    onShow,
    onClose
  } = _ref2;
  const _refDialog = (0, _uiApi.useRef)(null),
    _refPrevFocused = (0, _uiApi.useRef)(null),
    _refIsShow = (0, _uiApi.useRef)(isShow),
    [isMore, toggleIsMore] = (0, _useToggle.default)(false)
    /*eslint-disable react-hooks/exhaustive-deps */,
    [focusDialogEl, focusPrevEl, _hKeyDown, _hClose] = (0, _uiApi.useMemo)(() => [() => (0, _uiApi.focusRefElement)(_refDialog), () => (0, _uiApi.focusRefElement)(_refPrevFocused), evt => {
      if (document.activeElement == (0, _uiApi.getRefValue)(_refDialog)) {
        onKeyDown(evt);
      }
    }, evt => {
      focusPrevEl();
      onClose();
    }], []);
  // onKeyDown
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    (0, _uiApi.setRefValue)(_refPrevFocused, document.activeElement);
    focusDialogEl();
  }, []);
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useXYMovable.default)(_refDialog);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (isShow && !(0, _uiApi.getRefValue)(_refIsShow)) {
      focusDialogEl();
    }
    (0, _uiApi.setRefValue)(_refIsShow, isShow);
  }, [isShow]);
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useImperativeHandle)(refEl, () => ({
    focusPrevEl
  }));
  (0, _useRefHotKey.default)(_refDialog, HK_LOAD, onLoad);
  (0, _useRefHotKey.default)(_refDialog, HK_SHOW, onShow);
  (0, _useRefHotKey.default)(_refDialog, HK_CLOSE, _hClose);
  const [_className, _showHideStyle] = (0, _crStyle.crShowHide)(isShow, CL_DIALOG),
    _onMore = menuToggle ? toggleIsMore : void 0;
  return /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/(
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    (0, _jsxRuntime.jsxs)("div", {
      ref: _refDialog,
      role: "dialog",
      className: _className,
      style: {
        ...S_DIV,
        ...style,
        ..._showHideStyle
      },
      tabIndex: "0",
      onKeyDown: _hKeyDown,
      children: [(0, _jsxRuntime.jsx)(_BrowserCaption.default, {
        style: captionStyle,
        caption: caption,
        onMore: _onMore,
        onClose: onClose
      }), menuToggle && (0, _jsxRuntime.jsx)(_ModalToggle.default, {
        isShow: isMore,
        className: CL_MODAL_TOGGLE,
        configs: menuToggle,
        onToggle: toggleItem,
        onClose: toggleIsMore
      }), (0, _jsxRuntime.jsx)("div", {
        children: children
      }), (0, _jsxRuntime.jsx)(DialogButtons, {
        onLoad: onLoad,
        onShow: onShow,
        onClose: _hClose
      })]
    })
  );
};

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
var _default = exports.default = DraggableDialog;
//# sourceMappingURL=DraggableDialog.js.map