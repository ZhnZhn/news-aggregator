"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _ItemStack = _interopRequireDefault(require("../zhn-atoms/ItemStack"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _OptionFn = require("./OptionFn");
var _jsxRuntime = require("preact/jsx-runtime");
const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};
const _fFocusItem = propName => ref => {
  const _elItem = ((0, _uiApi.getRefValue)(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS);
    _elItem.focus();
    (0, _uiApi.setRefValue)(ref, _elItem);
  }
};
const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');
const _crItem = (item, index, _ref2) => {
  let {
    refFirstItem,
    refItem,
    currentItem,
    clItem,
    onSelect
  } = _ref2;
  const caption = (0, _OptionFn.getItemCaption)(item),
    value = (0, _OptionFn.getItemValue)(item),
    [_tabIndex, _ref, _ariaSelected] = value === (currentItem && (0, _OptionFn.getItemValue)(currentItem)) ? ["0", refItem, "true"] : ["-1"],
    _hKeyDown = evt => {
      if (evt.key === _uiApi.KEY_ENTER) {
        onSelect(item, evt);
      }
    };
  return (0, _jsxRuntime.jsx)("div", {
    role: "option",
    ref: _ref,
    ref: el => {
      const _refEl = index === 0 ? _ref || refFirstItem : _ref;
      if (_refEl) {
        _refEl.current = el;
      }
    },
    "aria-selected": _ariaSelected,
    tabIndex: _tabIndex,
    className: clItem,
    onClick: evt => onSelect(item, evt),
    onKeyDown: _hKeyDown,
    children: caption
  }, value);
};
const OptionsPane = _ref3 => {
  let {
    refOp,
    id,
    isShow,
    isFocusItem = true,
    className,
    style,
    options,
    item,
    clItem,
    onSelect,
    onClose
  } = _ref3;
  const _refFirstItem = (0, _uiApi.useRef)(null),
    _refItem = (0, _uiApi.useRef)(null),
    _refFocus = (0, _uiApi.useRef)(null)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)(evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusNextItem(_refFocus);
      } else if (evt.key === _uiApi.KEY_ARROW_UP) {
        (0, _uiApi.stopDefaultFor)(evt);
        _focusPrevItem(_refFocus);
      } else if (evt.key === _uiApi.KEY_ESCAPE || evt.key === _uiApi.KEY_TAB) {
        onClose();
      }
    }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useImperativeHandle)(refOp, () => ({
    hKeyDown: _hKeyDown
  }), []);
  // _hKeyDown
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(() => {
    if (isShow && isFocusItem) {
      (0, _uiApi.setRefValue)(_refFocus, (0, _uiApi.focusRefElement)(_refItem, _refFirstItem));
    }
  }, [isShow, isFocusItem]);
  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_ShowHide.default, {
      id: id,
      isShow: isShow,
      isScrollable: true,
      className: className,
      style: style,
      role: "listbox",
      onKeyDown: _hKeyDown,
      children: (0, _jsxRuntime.jsx)(_ItemStack.default, {
        items: options,
        crItem: _crItem,
        refFirstItem: _refFirstItem,
        refItem: _refItem,
        currentItem: item,
        clItem: clItem,
        onSelect: onSelect
      })
    })
  });
};
var _default = OptionsPane;
exports.default = _default;
//# sourceMappingURL=OptionsPane.js.map