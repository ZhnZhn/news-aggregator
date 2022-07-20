"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _jsxRuntime = require("react/jsx-runtime");

var CL_SELECT = 'm-select',
    CL_LABEL = CL_SELECT + "__label",
    CL_DIV = CL_SELECT + "__div",
    CL_DIV_VALUE = CL_SELECT + "__div__value",
    CL_DIV_BT = CL_SELECT + "__div__bt",
    CL_INPUT_LINE = CL_SELECT + "__line";
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
      _useState2 = (0, _uiApi.useState)(false),
      isShow = _useState2[0],
      setIsShow = _useState2[1],
      _hOpen = (0, _uiApi.useCallback)(function () {
    return setIsShow(true);
  }, []),
      _hClose = (0, _uiApi.useCallback)(function () {
    return setIsShow(false);
  }, []),
      _hSelect = (0, _uiApi.useCallback)(function (item, event) {
    event.stopPropagation();
    onSelect(item);
    setIsShow(false);
    setItem(item);
  }, []); // onSelect

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: CL_SELECT,
    style: TS.ROOT,
    onClick: _hOpen,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL_LABEL,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane["default"], {
      isShow: isShow,
      item: item,
      options: options,
      clItem: TS.CL_ITEM,
      onSelect: _hSelect,
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL_DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_DIV_VALUE,
        children: item.caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: CL_DIV_BT,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL_INPUT_LINE
      })]
    })]
  });
};

var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map