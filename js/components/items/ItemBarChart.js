"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _Article = _interopRequireDefault(require("./Article.Style"));
var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));
var _ItemHeader = _interopRequireDefault(require("./ItemHeader"));
var _ShowHide = _interopRequireDefault(require("../zhn-atoms/ShowHide"));
var _BarChart = _interopRequireDefault(require("../zhn-charts/BarChart"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
var S_SHOW_HIDE = {
  padding: '8px 0',
  lineHeight: 1
};
var _isArr = Array.isArray;
var ItemBarChart = function ItemBarChart(_ref) {
  var categoryBars = _ref.categoryBars,
    maxValue = _ref.maxValue,
    numberOfItems = _ref.numberOfItems;
  var _useState = (0, _uiApi.useState)(false),
    isClosed = _useState[0],
    setIsClosed = _useState[1];
  var _useState2 = (0, _uiApi.useState)(false),
    isShow = _useState2[0],
    setIsShow = _useState2[1],
    _useMemo = (0, _uiApi.useMemo)(function () {
      return [function () {
        return setIsClosed(true);
      }, function () {
        return setIsShow(function (is) {
          return !is;
        });
      }, function () {
        return setIsShow(false);
      }];
    }, []),
    _closeItem = _useMemo[0],
    _hToggle = _useMemo[1],
    _hHide = _useMemo[2],
    TS = (0, _useTheme["default"])(_Article["default"]);
  (0, _uiApi.useEffect)(function () {
    if (_isArr(categoryBars)) {
      setIsClosed(false);
    }
  }, [categoryBars]);
  var _style = (0, _crStyle["default"])([isClosed, _Item.S_NONE]),
    _captionStyle = (0, _crStyle["default"])(_Item.S_CAPTION, [isShow, _Item.S_CAPTION_OPEN]);
  return _isArr(categoryBars) ? (0, _jsxRuntime.jsxs)("div", {
    style: (0, _extends2["default"])({}, _Item.S_ITEM, _style),
    children: [(0, _jsxRuntime.jsx)(_ItemHeader["default"], {
      className: _Item.CL_ITEM_HEADER,
      style: TS.HEADER,
      captionStyle: _captionStyle,
      btCloseStyle: _Item.S_SVG_CLOSE,
      title: "Categories Bar Chart (" + numberOfItems + ")",
      isShow: isShow,
      onClick: _hToggle,
      onClose: _closeItem,
      onHide: _hHide
    }), (0, _jsxRuntime.jsx)(_ShowHide["default"], {
      style: S_SHOW_HIDE,
      isShow: isShow,
      children: (0, _jsxRuntime.jsx)(_BarChart["default"], {
        items: categoryBars,
        maxValue: maxValue
      })
    })]
  }) : null;
};
var _default = ItemBarChart;
exports["default"] = _default;
//# sourceMappingURL=ItemBarChart.js.map