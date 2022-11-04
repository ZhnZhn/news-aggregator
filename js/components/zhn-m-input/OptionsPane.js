"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));

var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));

var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));

var _OptionFn = require("./OptionFn");

var _jsxRuntime = require("preact/jsx-runtime");

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
    var _elItem = ((0, _uiApi.getRefValue)(ref) || {})[propName];

    if (_elItem) {
      _elItem.scrollIntoView(SCROLL_OPTIONS);

      _elItem.focus();

      ref.current = _elItem;
    }
  };
};

var _focusNextItem = _fFocusItem('nextSibling');

var _focusPrevItem = _fFocusItem('previousSibling');

var _crItem = function _crItem(item, index, _ref2) {
  var refItem = _ref2.refItem,
      currentItem = _ref2.currentItem,
      clItem = _ref2.clItem,
      onSelect = _ref2.onSelect;

  var caption = (0, _OptionFn.getItemCaption)(item),
      value = (0, _OptionFn.getItemValue)(item),
      _ref3 = value === (0, _OptionFn.getItemValue)(currentItem) ? ["0", refItem, "true"] : ["-1"],
      _tabIndex = _ref3[0],
      _ref = _ref3[1],
      _ariaSelected = _ref3[2],
      _hKeyDown = function _hKeyDown(evt) {
    if (evt.key === 'Enter') {
      onSelect(item, evt);
    }
  };

  return (0, _jsxRuntime.jsx)("div", {
    role: "option",
    ref: _ref,
    "aria-selected": _ariaSelected,
    tabIndex: _tabIndex,
    className: clItem,
    onClick: function onClick(evt) {
      return onSelect(item, evt);
    },
    onKeyDown: _hKeyDown,
    children: caption
  }, value);
};

var OptionsPane = function OptionsPane(_ref4) {
  var isShow = _ref4.isShow,
      className = _ref4.className,
      options = _ref4.options,
      item = _ref4.item,
      clItem = _ref4.clItem,
      onSelect = _ref4.onSelect,
      onClose = _ref4.onClose;

  var _refItem = (0, _uiApi.useRef)(null),
      _refFocus = (0, _uiApi.useRef)(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
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


  (0, _uiApi.useEffect)(function () {
    if (isShow) {
      var _elItem = (0, _uiApi.getRefValue)(_refItem);

      if (_elItem) {
        _elItem.focus();

        (0, _uiApi.setRefValue)(_refFocus, _elItem);
      }
    }
  }, [isShow]);
  return (0, _jsxRuntime.jsx)(_ModalPane["default"], {
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide["default"], {
      isShow: isShow,
      isScrollable: true,
      className: className,
      role: "presentation",
      onKeyDown: _hKeyDown,
      children: (0, _jsxRuntime.jsx)(_ItemStack["default"], {
        items: options,
        crItem: _crItem,
        refItem: _refItem,
        currentItem: item,
        clItem: clItem,
        onSelect: onSelect
      })
    })
  });
};

var _default = OptionsPane;
exports["default"] = _default;
//# sourceMappingURL=OptionsPane.js.map