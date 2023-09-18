"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useId = _interopRequireDefault(require("../hooks/useId"));
var _TextField = _interopRequireDefault(require("./TextField"));
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _useOptionsPane = require("./useOptionsPane");
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
    styleConfig,
    onSelect
  } = _ref;
  const _optionsPaneId = (0, _useId.default)(),
    _refTf = (0, _uiApi.useRef)(),
    _refBtArrow = (0, _uiApi.useRef)(),
    _refOp = (0, _uiApi.useRef)(),
    [items, setItems] = (0, _uiApi.useState)(options),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [state, dispatch] = (0, _useOptionsPane.useOptionsPane)(),
    [isShowOptions, isFocusItem] = state

    /*eslint-disable react-hooks/exhaustive-deps */,
    _clearItem = (0, _uiApi.useCallback)(() => {
      onSelect(initItem, id);
      setItem('');
      setItems(options);
      dispatch(_useOptionsPane.ACTION_CLOSE_OPTIONS);
    }, [])
    // onSelect, initItem, id, dispatch
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDownBtArrow = evt => {
      if (isShowOptions) {
        const _opInst = (0, _uiApi.getRefValue)(_refOp);
        if (_opInst) {
          _opInst.hKeyDown(evt);
        }
      } else {
        if (evt.key === _uiApi.KEY_ARROW_DOWN) {
          dispatch(_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS);
        } else if (evt.key === _uiApi.KEY_DELETE) {
          _clearItem();
          (0, _uiApi.setRefInputValue)(_refTf, '');
          (0, _uiApi.focusRefElement)(_refTf);
        }
      }
    }

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCloseOptions = (0, _uiApi.useMemo)(() => () => {
      dispatch(_useOptionsPane.ACTION_CLOSE_OPTIONS);
      (0, _uiApi.focusRefElement)(_refBtArrow);
    }, [])
    // dispatch
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _setItem = (0, _uiApi.useCallback)(item => {
      const _isEmptyOptions = item === _useOptionsPane.EMPTY_OPTIONS[0],
        _item = _isEmptyOptions ? initItem : item;
      onSelect(_item, id);
      setItem(_item);
      dispatch(_useOptionsPane.ACTION_CLOSE_OPTIONS);
      if (_isEmptyOptions) {
        setItems(options);
      }
      (0, _uiApi.setRefInputValue)(_refTf, _item);
      if (_item) {
        (0, _uiApi.focusRefElement)(_refBtArrow);
      }
    }, [])
    // id, onSelect, dispatch
    /*eslint-enable react-hooks/exhaustive-deps */,
    _lazySearchOptions = (0, _uiApi.useMemo)(() => (0, _uiApi.crLazyValue)(() => options.map(item => {
      item._t = item[0].toLowerCase();
      return item;
    })), [options])

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hInputChange = (0, _uiApi.useCallback)((token, id) => {
      const _token = (token || '').trim().toLowerCase();
      if (_token) {
        const _nextItems = _lazySearchOptions.value.filter(item => item._t.indexOf(_token) !== -1);
        setItems(_nextItems.length ? _nextItems : _useOptionsPane.EMPTY_OPTIONS);
        dispatch(_useOptionsPane.ACTION_SHOW_OPTIONS);
      } else {
        _clearItem();
      }
    }, [_lazySearchOptions, _clearItem])
    //options, dispatch, _clearItem
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDown = evt => {
      const key = evt.key;
      if (key === _uiApi.KEY_ARROW_DOWN) {
        dispatch(_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS);
      }
    },
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
      dispatch(_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS);
    };
  return (0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: _Input.CL_SELECT,
    style: styleConfig.ROOT,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      id: _optionsPaneId,
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
      onInputChange: _hInputChange,
      onEnter: _hEnter,
      onKeyDown: _hKeyDown,
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-expanded": isShowOptions,
      "aria-controls": _optionsPaneId,
      children: _isBtArrow(item, items, options) && (0, _jsxRuntime.jsx)("button", {
        ref: _refBtArrow,
        type: "button",
        className: _Input.CL_SELECT_DIV_BT,
        style: S_BT_ARROW,
        onKeyDown: _hKeyDownBtArrow,
        onClick: _hClickBtArrow,
        children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      })
    })]
  });
};
var _default = InputSuggest;
exports.default = _default;
//# sourceMappingURL=InputSuggest.js.map