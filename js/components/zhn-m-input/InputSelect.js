"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
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
    styleConfig: TS,
    onSelect
  } = _ref;
  const _refBtArrow = (0, _uiApi.useRef)(),
    [item, setItem] = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
    [isShowOptions, showOptions, hideOptions] = (0, _useBool.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hCloseOptions = (0, _uiApi.useMemo)(() => () => {
      hideOptions();
      (0, _uiApi.focusRefElement)(_refBtArrow);
    }, [])
    // hideOptions, _refBtArrow
    ,
    [_hSelect, _hKeyDown] = (0, _uiApi.useMemo)(() => [(item, evt) => {
      (0, _uiApi.stopDefaultFor)(evt);
      onSelect(item, id);
      _hCloseOptions();
      setItem(item);
    },
    // id, onSelect, _closeOptions
    evt => {
      if (evt.key === _uiApi.KEY_ARROW_DOWN) {
        (0, _uiApi.stopDefaultFor)(evt);
        showOptions();
      }
    }
    // showOptions
    ], []);
  // hideOptions, _refBtArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: _Input.CL_SELECT,
    style: TS.ROOT,
    onClick: showOptions,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: _Input.CL_SELECT_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
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