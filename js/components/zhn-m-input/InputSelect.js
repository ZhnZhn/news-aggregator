"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _CL = require("../styles/CL");
var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));
var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));
var _OptionFn = require("./OptionFn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SELECT = 'm-select',
  CL_LABEL = CL_SELECT + "__label",
  CL_DIV = CL_SELECT + "__div",
  CL_DIV_VALUE = CL_SELECT + "__div__value",
  CL_DIV_BT = CL_SELECT + "__div__bt",
  CL_INPUT_LINE = CL_SELECT + "__line",
  CL_SELECT_OPTIONS = CL_SELECT + "__options with-scroll";
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
    _hCloseOptions = (0, _uiApi.useCallback)(() => {
      hideOptions();
      (0, _uiApi.focusRefElement)(_refBtArrow);
    }, [])
    // hideOptions, _refBtArrow
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hSelect = (0, _uiApi.useCallback)((item, evt) => {
      evt.stopPropagation();
      onSelect(item, id);
      _hCloseOptions();
      setItem(item);
    }, []);
  // id, onSelect, _closeOptions
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: CL_SELECT,
    style: TS.ROOT,
    onClick: showOptions,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane.default, {
      isShow: isShowOptions,
      className: CL_SELECT_OPTIONS,
      item: item,
      options: options,
      clItem: _CL.CL_SELECT_ITEM,
      onSelect: _hSelect,
      onClose: _hCloseOptions
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [(0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_VALUE,
        children: (0, _OptionFn.getItemCaption)(item)
      }), (0, _jsxRuntime.jsx)("button", {
        ref: _refBtArrow,
        type: "button",
        className: CL_DIV_BT,
        children: (0, _jsxRuntime.jsx)(_ArrowCell.default, {})
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE
      })]
    })]
  });
};
var _default = InputSelect;
exports.default = _default;
//# sourceMappingURL=InputSelect.js.map