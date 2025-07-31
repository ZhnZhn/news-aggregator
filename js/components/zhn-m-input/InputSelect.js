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
const S_BT_ARROW = {
    ..._Input.S_BT_ARROW_RIGHT,
    top: 'calc(17px - 1rem)'
  },
  DF_INIT_ITEM = ['', ''];
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
    [isShowTuple, setIsShowTuple] = (0, _uiApi.useState)([!1]),
    [showOptions, hideOptions] = (0, _uiApi.useMemo)(() => [focusOption => setIsShowTuple([!0, focusOption]), () => setIsShowTuple([!1])], []),
    [isShowOptions, focusOption] = isShowTuple,
    [_optionPaneId, _ariaComboboxProps] = (0, _useAriaCombobox.default)(isShowOptions)
    /*eslint-disable react-hooks/exhaustive-deps */,
    [_hCloseOptions, _hSelect, _hKeyDown] = (0, _uiApi.useMemo)(() => [() => {
      hideOptions();
      (0, _uiApi.focusRefElement)(_refBtArrow);
    },
    // hideOptions
    (item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      onSelect(item, id);
      _hCloseOptions();
      setItem(item);
    },
    // id, onSelect, _hCloseOptions
    evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        (0, _uiApi.stopDefaultFor)(evt);
        showOptions(_OptionFn.FOCUS_NEXT_OPTION);
      } else if (evt.key === _uiApi.KEY_ARROW_UP) {
        (0, _uiApi.stopDefaultFor)(evt);
        showOptions(_OptionFn.FOCUS_PREV_OPTION);
      }
    }
    // showOptions
    ], []);
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (0, _jsxRuntime.jsxs)("div", {
    ..._ariaComboboxProps,
    tabIndex: "-1",
    className: _Input.CL_SELECT,
    style: style,
    onClick: showOptions,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      id: _optionPaneId,
      isShow: isShowOptions,
      focusOption: focusOption,
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
        refEl: _refBtArrow,
        style: S_BT_ARROW
      }), (0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_SELECT_INPUT_LINE
      })]
    })]
  });
};
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map