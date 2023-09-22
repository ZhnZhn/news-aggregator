"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useAriaCombobox = _interopRequireDefault(require("./useAriaCombobox"));
var _ButtonArrow = _interopRequireDefault(require("./ButtonArrow"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const DF_INIT_ITEM = ['', ''];
const InputSelect = _ref => {
  let {
    id,
    style,
    initItem,
    caption,
    options,
    onSelect
  } = _ref;
  const _refBtArrow = (0, _uiApi.useRef)(),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [isShowOptions, setIsShowOptions] = (0, _uiApi.useState)(false),
    [_optionPaneId, _ariaComboboxProps] = (0, _useAriaCombobox.default)(isShowOptions),
    [_hShowOptions, _hCloseOptions] = (0, _uiApi.useMemo)(() => [evt => {
      (0, _uiApi.stopDefaultFor)(evt);
      setIsShowOptions(true);
    }, () => {
      setIsShowOptions(false);
      (0, _uiApi.focusRefElement)(_refBtArrow);
    }], [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    [_hSelect, _hKeyDown] = (0, _uiApi.useMemo)(() => [(item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      onSelect(item, id);
      _hCloseOptions();
      setItem(item);
    },
    // id, onSelect, _hCloseOptions
    evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        _hShowOptions(evt);
      }
    }
    // _hShowOptions
    ], []);
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (0, _jsxRuntime.jsxs)("div", {
    ..._ariaComboboxProps,
    tabIndex: "-1",
    className: _Input.CL_SELECT,
    style: style,
    onClick: _hShowOptions,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      id: _optionPaneId,
      isShow: isShowOptions,
      className: _Input.CL_SELECT_OPTIONS,
      item: item,
      options: options,
      clItem: _Input.CL_SELECT_ITEM,
      onSelect: _hSelect,
      onClose: _hCloseOptions
    }), (0, _jsxRuntime.jsxs)("div", {
      className: _Input.CL_SELECT_DIV,
      children: [(0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_SELECT_DIV_VALUE,
        children: (0, _OptionFn.getItemCaption)(item)
      }), (0, _jsxRuntime.jsx)(_ButtonArrow.default, {
        ref: _refBtArrow
      }), (0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_SELECT_INPUT_LINE
      })]
    })]
  });
};
var _default = InputSelect;
exports.default = _default;
//# sourceMappingURL=InputSelect.js.map