"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useId = _interopRequireDefault(require("../hooks/useId"));
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const DF_INIT_ITEM = ['', ''];
const InputSelect = _ref => {
  let {
    id,
    initItem,
    caption,
    options,
    styleConfig,
    onSelect
  } = _ref;
  const _optionPaneId = (0, _useId.default)(),
    _refBtArrow = (0, _uiApi.useRef)(),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [isShowOptions, setIsShowOptions] = (0, _uiApi.useState)(false),
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

  return (0, _jsxRuntime.jsxs)("div", {
    role: "combobox",
    "aria-controls": _optionPaneId,
    "aria-expanded": isShowOptions,
    tabIndex: "-1",
    className: _Input.CL_SELECT,
    style: styleConfig.ROOT,
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
      }), (0, _jsxRuntime.jsx)("button", {
        ref: _refBtArrow,
        type: "button",
        className: _Input.CL_SELECT_DIV_BT,
        children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      }), (0, _jsxRuntime.jsx)("div", {
        className: _Input.CL_SELECT_INPUT_LINE
      })]
    })]
  });
};
var _default = InputSelect;
exports.default = _default;
//# sourceMappingURL=InputSelect.js.map