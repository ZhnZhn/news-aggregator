"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line'
};
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

  var _useState = (0, _react.useState)(initItem || DF_INIT_ITEM),
      item = _useState[0],
      setItem = _useState[1],
      _useState2 = (0, _react.useState)(false),
      isShow = _useState2[0],
      setIsShow = _useState2[1],
      _hOpen = (0, _react.useCallback)(function () {
    return setIsShow(true);
  }, []),
      _hClose = (0, _react.useCallback)(function () {
    return setIsShow(false);
  }, []),
      _hSelect = (0, _react.useCallback)(function (item, event) {
    event.stopPropagation();
    onSelect(item);
    setIsShow(false);
    setItem(item);
  }, []); // onSelect

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "presentation",
    className: CL.SELECT,
    style: TS.ROOT,
    onClick: _hOpen,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      className: CL.LABEL,
      children: caption
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane["default"], {
      isShow: isShow,
      item: item,
      options: options,
      clItem: TS.CL_ITEM,
      onSelect: _hSelect,
      onClose: _hClose
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.DIV,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL.DIV_VALUE,
        children: item.caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: CL.DIV_BT,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: CL.INPUT_LINE
      })]
    })]
  });
};

var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map