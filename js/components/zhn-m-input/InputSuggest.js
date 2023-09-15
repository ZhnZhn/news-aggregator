"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _TextField = _interopRequireDefault(require("./TextField"));
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_OPTIONS_PANE = {
    top: 64
  },
  S_BT_ARROW = {
    top: 12
  };
const DF_INIT_ITEM = ['', ''],
  NOT_HAS_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS,
  _isBtArrow = (item, items, options) => NOT_HAS_TOUCH_EVENTS || _has.HAS_TOUCH_EVENTS && !item && items.length === options.length;
const InputSuggest = _ref => {
  let {
    id,
    tfStyle,
    initItem,
    caption,
    options,
    styleConfig: TS,
    onSelect
  } = _ref;
  const _refTf = (0, _uiApi.useRef)(),
    _refBtArrow = (0, _uiApi.useRef)(),
    _refOp = (0, _uiApi.useRef)(),
    [items, setItems] = (0, _uiApi.useState)(options),
    [isFocusItem, setIsFocusItem] = (0, _uiApi.useState)(false),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [isShowOptions, showOptions, hideOptions] = (0, _useBool.default)(),
    _hHideOptions = evt => {
      if (isShowOptions) {
        _refOp.current.hKeyDown(evt);
      } else {
        if (evt.key === _uiApi.KEY_ARROW_DOWN) {
          setIsFocusItem(true);
          showOptions();
        } else if (evt.key === _uiApi.KEY_DELETE) {
          _setItem('');
          setItems(options);
          hideOptions();
          (0, _uiApi.focusRefElement)(_refTf);
        }
      }
    }

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCloseOptions = (0, _uiApi.useMemo)(() => () => {
      hideOptions();
      (0, _uiApi.focusRefElement)(_refBtArrow);
    }, [])
    // hideOptions, _refBtArrow
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _setItem = (0, _uiApi.useCallback)(item => {
      onSelect(item, id);
      hideOptions();
      setItem(item);
      (0, _uiApi.setRefInputValue)(_refTf, item);
      if (item) {
        (0, _uiApi.focusRefElement)(_refBtArrow);
      }
    }, [])
    // id, onSelect, _hCloseOptions
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _uiApi.useCallback)((token, id, evt) => {
      if (evt && evt.key !== _uiApi.KEY_TAB) {
        const _token = (token || '').trim().toLowerCase();
        if (_token) {
          setItems(prevItems => options.filter(item => item[0].toLowerCase().indexOf(_token) !== -1));
          showOptions();
          setIsFocusItem(false);
        } else {
          _setItem('');
          setItems(options);
          hideOptions();
        }
      }
    }, [options, showOptions, hideOptions])
    //options, showOptions, hideOptions, _setItem
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hEnter = (item, id, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      setItems(prevItems => {
        if (prevItems.length !== 0) {
          _setItem(prevItems[0]);
        }
        return prevItems;
      });
    },
    _hSelect = (item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      _setItem(item);
    },
    _hClickBtArrow = () => {
      showOptions();
      setIsFocusItem(true);
    };
  return (0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: _Input.CL_SELECT,
    style: TS.ROOT,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      refOp: _refOp,
      isShow: isShowOptions,
      isFocusItem: isFocusItem,
      className: _Input.CL_SELECT_OPTIONS,
      style: S_OPTIONS_PANE,
      item: item,
      options: items,
      clItem: _Input.CL_SELECT_ITEM,
      onSelect: _hSelect,
      onClose: _hCloseOptions
    }), (0, _jsxRuntime.jsx)(_TextField.default, {
      ref: _refTf,
      style: tfStyle,
      initValue: (0, _OptionFn.getItemCaption)(item),
      onKeyDown: _hKeyDown,
      onEnter: _hEnter,
      children: _isBtArrow(item, items, options) && (0, _jsxRuntime.jsx)("button", {
        ref: _refBtArrow,
        type: "button",
        className: _Input.CL_SELECT_DIV_BT,
        style: S_BT_ARROW,
        onKeyDown: _hHideOptions,
        onClick: _hClickBtArrow,
        children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      })
    })]
  });
};
var _default = InputSuggest;
exports.default = _default;
//# sourceMappingURL=InputSuggest.js.map