"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _ScrollStyle = _interopRequireDefault(require("../styles/ScrollStyle"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = "with-scroll";
var S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: '#80c040'
  }
};
var SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

var _preventStopEvent = function _preventStopEvent(evt) {
  evt.preventDefault();
  evt.stopPropagation();
};

var _fFocusItem = function _fFocusItem(propName) {
  return function (ref) {
    var _elItem = (ref.current || {})[propName];

    if (_elItem) {
      _elItem.scrollIntoView(SCROLL_OPTIONS);

      _elItem.focus();

      ref.current = _elItem;
    }
  };
};

var _focusNextItem = _fFocusItem('nextSibling');

var _focusPrevItem = _fFocusItem('previousSibling');

var _fCrItem = function _fCrItem(ref, currentItem, clItem, onSelect) {
  return function (item) {
    var value = item.value,
        caption = item.caption,
        _style = value === currentItem.value ? S.ITEM : void 0,
        _hKeyDown = function _hKeyDown(evt) {
      if (evt.key === 'Enter') {
        onSelect(item, evt);
      }
    };

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      role: "option",
      ref: _style ? ref : void 0,
      "aria-selected": _style ? 'true' : void 0,
      tabIndex: _style ? "0" : "-1",
      style: _style,
      className: clItem,
      onClick: function onClick(evt) {
        return onSelect(item, evt);
      },
      onKeyDown: _hKeyDown,
      children: caption
    }, value);
  };
};

var OptionsPane = function OptionsPane(_ref) {
  var isShow = _ref.isShow,
      options = _ref.options,
      item = _ref.item,
      clItem = _ref.clItem,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose;

  var _refItem = (0, _react.useRef)(null),
      _refFocus = (0, _react.useRef)(null),
      TS = (0, _useTheme["default"])(_ScrollStyle["default"]),
      TS_D = (0, _useTheme["default"])(_Dialog["default"]),
      _crItem = (0, _react.useMemo)(function () {
    return _fCrItem(_refItem, item, TS_D.SELECT.CL_ITEM, onSelect);
  }, [item, TS_D.SELECT.CL_ITEM, onSelect])
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _hKeyDown = (0, _react.useCallback)(function (evt) {
    if (evt.key === 'ArrowDown') {
      _preventStopEvent(evt);

      _focusNextItem(_refFocus);
    } else if (evt.key === 'ArrowUp') {
      _preventStopEvent(evt);

      _focusPrevItem(_refFocus);
    } else if (evt.key === 'Escape') {
      _preventStopEvent(evt);

      onClose();
    }
  }, []); //onClose

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _react.useEffect)(function () {
    if (isShow && _refItem.current) {
      _refItem.current.focus();

      _refFocus.current = _refItem.current;
    }
  }, [isShow]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalPane["default"], {
    isShow: isShow,
    style: TS_D.SELECT.MODAL_PANE,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShow,
      className: CL + " " + TS.CL_SCROLL,
      style: (0, _extends2["default"])({}, S.PANE, TS_D.SELECT.MODAL_PANE),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        role: "presentation",
        onKeyDown: _hKeyDown,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemStack["default"], {
          items: options,
          crItem: _crItem
        })
      })
    })
  });
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map