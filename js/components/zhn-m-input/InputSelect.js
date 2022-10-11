"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _CL = require("../styles/CL");

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _jsxRuntime = require("preact/jsx-runtime");

var CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    CL_DIV = CL_SELECT + "__div",
    CL_DIV_VALUE = CL_SELECT + "__div__value",
    CL_DIV_BT = CL_SELECT + "__div__bt",
    CL_INPUT_LINE = CL_SELECT + "__line",
    CL_SELECT_OPTIONS = CL_SELECT + "__options with-scroll";
var DF_INIT_ITEM = {
  caption: '',
  value: ''
};

var InputSelect = function InputSelect(_ref) {
  var initItem = _ref.initItem,
      caption = _ref.caption,
      options = _ref.options,
      TS = _ref.styleConfig,
      onSelect = _ref.onSelect;

  var _useState = (0, _uiApi.useState)(initItem || DF_INIT_ITEM),
      item = _useState[0],
      setItem = _useState[1],
      _useBool = (0, _useBool2["default"])(),
      isShow = _useBool[0],
      showComp = _useBool[1],
      hideComp = _useBool[2],
      _hSelect = (0, _uiApi.useCallback)(function (item, event) {
    event.stopPropagation();
    onSelect(item);
    hideComp();
    setItem(item);
  }, []); // onSelect, hideComp

  /*eslint-enable react-hooks/exhaustive-deps */


  return (0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: CL_SELECT,
    style: TS.ROOT,
    onClick: showComp,
    children: [(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      children: caption
    }), (0, _jsxRuntime.jsx)(_OptionsPane["default"], {
      isShow: isShow,
      className: CL_SELECT_OPTIONS,
      item: item,
      options: options,
      clItem: _CL.CL_SELECT_ITEM,
      onSelect: _hSelect,
      onClose: hideComp
    }), (0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [(0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_VALUE,
        children: item.caption
      }), (0, _jsxRuntime.jsx)("button", {
        className: CL_DIV_BT,
        children: (0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
      }), (0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE
      })]
    })]
  });
};

var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map