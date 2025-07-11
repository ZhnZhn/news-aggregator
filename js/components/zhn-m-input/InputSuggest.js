"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _crLazyValue = require("../../utils/crLazyValue");
var _uiApi = require("../uiApi");
var _uiStore = require("../../flux/uiStore");
var _crStyle = require("../crStyle");
var _has = require("../has");
var _useAriaCombobox = _interopRequireDefault(require("./useAriaCombobox"));
var _TextField = _interopRequireDefault(require("./TextField"));
var _ButtonArrow = _interopRequireDefault(require("./ButtonArrow"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _useOptionsPane = require("./useOptionsPane");
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_OPTIONS_PANE = {
    top: 64
  },
  S_BT_ARROW = {
    ..._Input.S_BT_ARROW_RIGHT,
    top: 'calc(42.8px - 1.8rem)'
  },
  S_BT_ARROW_FILL = {
    fill: "#80c040"
  };
const FILTER_TIME_OUT_MLS = 350,
  NOT_HAS_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS,
  _isBtArrow = (item, items, options) => NOT_HAS_TOUCH_EVENTS || _has.HAS_TOUCH_EVENTS && !item && items.length === options.length;
const InputSuggest = _ref => {
  let {
    isInput,
    maxInput = "21",
    id,
    style,
    tfStyle,
    initItem,
    caption,
    options,
    onSelect
  } = _ref;
  const _isAdvancedInputOptions = (0, _uiStore.useIsAdvancedInputOptions)(),
    _isInput = !!(isInput && _isAdvancedInputOptions),
    _refTf = (0, _uiApi.useRef)(),
    _refBtArrow = (0, _uiApi.useRef)(),
    _refOp = (0, _uiApi.useRef)(),
    _refFilterId = (0, _uiApi.useRef)(),
    _refItem = (0, _uiApi.useRef)(),
    [state, dispatch] = (0, _useOptionsPane.useOptionsPane)(options, initItem),
    [isShowOptions, isFocusItem, items, item] = state,
    [_optionsPaneId, _ariaComboboxProps] = (0, _useAriaCombobox.default)(isShowOptions, true)

    /*eslint-disable react-hooks/exhaustive-deps */,
    [_clearItem, _setItem, _hCloseOptions, _hKeyDownTextField, _hClickBtArrow] = (0, _uiApi.useMemo)(() => [
    //_clearItem
    () => {
      onSelect(initItem, id);
      dispatch([_useOptionsPane.ACTION_CLOSE_OPTIONS, options, '']);
      (0, _uiApi.focusAsyncRefElement)(_refTf, 200);
    },
    // onSelect, initItem, id, dispatch

    //_setItem
    item => {
      const _isEmptyOptions = item === _useOptionsPane.EMPTY_OPTIONS[0],
        _item = _isEmptyOptions ? initItem : item;
      onSelect(_item, id);
      dispatch([_useOptionsPane.ACTION_CLOSE_OPTIONS, _isEmptyOptions ? options : void 0, _item]);
      (0, _uiApi.setRefInputValue)(_refTf, (0, _OptionFn.getItemCaption)(_item));
      if (_item) {
        (0, _uiApi.focusRefElement)(_refBtArrow);
      }
    },
    // id, initItem, onSelect, dispatch

    //_hCloseOptions
    () => {
      dispatch([_useOptionsPane.ACTION_CLOSE_OPTIONS]);
      (0, _uiApi.focusRefElement)(_refBtArrow);
    },
    // dispatch

    //_hKeyDownTextField
    evt => {
      const key = evt.key;
      if (key === _uiApi.KEY_ARROW_DOWN) {
        dispatch([_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS]);
      }
    },
    // dispatch

    //_hClickBtArrow
    () => {
      dispatch([_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS]);
    }
    // dispatch
    ], [])
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDownBtArrow = evt => {
      if (isShowOptions) {
        const _opInst = (0, _uiApi.getRefValue)(_refOp);
        if (_opInst) {
          _opInst.hKeyDown(evt);
        }
      } else {
        if (evt.key === _uiApi.KEY_ARROW_DOWN) {
          dispatch([_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS]);
        } else if (evt.key === _uiApi.KEY_DELETE) {
          (0, _uiApi.setRefInputValue)(_refTf, '');
          _clearItem();
        }
      }
    },
    _getSearchOptions = (0, _uiApi.useMemo)(() => (0, _crLazyValue.crLazyValue)(() => options.map(item => {
      item._t = item[0].toLowerCase();
      return item;
    })), [options])

    /*eslint-disabl react-hooks/exhaustive-deps */,
    _hInputChange = (0, _uiApi.useMemo)(() => (token, id) => {
      const _tokenInLowerCase = (token || '').toLowerCase(),
        _token = _isInput ? _tokenInLowerCase : _tokenInLowerCase.trim();
      if (_token) {
        clearTimeout((0, _uiApi.getRefValue)(_refFilterId));
        (0, _uiApi.setRefValue)(_refFilterId, setTimeout(() => {
          const _nextItems = _getSearchOptions().filter(item => item._t.indexOf(_token) !== -1),
            _items = _nextItems.length ? _nextItems : _isInput ? [[token]] : _useOptionsPane.EMPTY_OPTIONS;
          (0, _uiApi.setRefValue)(_refItem, _items[0]);
          dispatch([_useOptionsPane.ACTION_SHOW_OPTIONS, _items]);
        }, FILTER_TIME_OUT_MLS));
      } else {
        _clearItem();
      }
    }, [_isInput, _getSearchOptions, _clearItem, dispatch])
    //dispatch
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    [_hSelectOption, _hEnterTextField] = (0, _uiApi.useMemo)(() => [(item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      _setItem(item);
    }, (item, id, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      _setItem((0, _uiApi.getRefValue)(_refItem));
    }], [])
    // _setItem
    /*eslint-enable react-hooks/exhaustive-deps */,
    _textFieldProps = _has.HAS_TOUCH_EVENTS && item ? {
      tabIndex: "-1",
      readOnly: true,
      inputCn: _crStyle.CL_SELECT_NONE,
      onClick: () => {
        dispatch([_useOptionsPane.ACTION_SHOW_OPTIONS_WITH_FOCUS]);
      }
    } : void 0;
  return (0, _jsxRuntime.jsxs)("div", {
    className: _Input.CL_SELECT,
    style: style,
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
      onSelect: _hSelectOption,
      onClose: _hCloseOptions
    }), (0, _jsxRuntime.jsx)(_TextField.default, {
      ..._ariaComboboxProps,
      ..._textFieldProps,
      refEl: _refTf,
      style: tfStyle,
      isTrimValue: !_isInput,
      initValue: (0, _OptionFn.getItemCaption)(item),
      maxLength: maxInput,
      onInputChange: _hInputChange,
      onEnter: _hEnterTextField,
      onKeyDown: _hKeyDownTextField,
      children: _isBtArrow(item, items, options) ? (0, _jsxRuntime.jsx)(_ButtonArrow.default, {
        refEl: _refBtArrow,
        style: (0, _crStyle.crStyle2)(S_BT_ARROW, isShowOptions && S_BT_ARROW_FILL),
        onKeyDown: _hKeyDownBtArrow,
        onClick: _hClickBtArrow
      }) : null
    })]
  });
};
var _default = exports.default = InputSuggest;
//# sourceMappingURL=InputSuggest.js.map