"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../zhn-utils/crStyle");
var _useItemType2 = _interopRequireDefault(require("./useItemType1"));
var _ItemType = _interopRequireDefault(require("./ItemType1"));
var _BarChart = _interopRequireDefault(require("../zhn-charts/BarChart"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
var S_BAR_CHART = {
  padding: '6px 0'
};
var _isArr = Array.isArray;
var ItemBarChart = function ItemBarChart(_ref) {
  var categoryBars = _ref.categoryBars,
    maxValue = _ref.maxValue,
    numberOfItems = _ref.numberOfItems;
  var _useState = (0, _uiApi.useState)(false),
    isClosed = _useState[0],
    setIsClosed = _useState[1],
    _closeItem = (0, _uiApi.useMemo)(function () {
      return function () {
        return setIsClosed(true);
      };
    }, []),
    _useItemType = (0, _useItemType2["default"])(),
    isShowDescr = _useItemType[0],
    _hToggle = _useItemType[1];
  (0, _uiApi.useEffect)(function () {
    if (_isArr(categoryBars)) {
      setIsClosed(false);
    }
  }, [categoryBars]);
  var _style = (0, _crStyle.crStyle2)(_Item.S_ITEM, isClosed && _Item.S_NONE);
  return _isArr(categoryBars) ? (0, _jsxRuntime.jsx)("div", {
    style: _style,
    children: (0, _jsxRuntime.jsx)(_ItemType["default"], {
      title: "Categories Bar Chart (" + numberOfItems + ")",
      isShowDescr: isShowDescr,
      onClick: _hToggle,
      onToggle: _hToggle,
      onClose: _closeItem,
      children: (0, _jsxRuntime.jsx)(_BarChart["default"], {
        style: S_BAR_CHART,
        items: categoryBars,
        maxValue: maxValue
      })
    })
  }) : null;
};
var _default = ItemBarChart;
exports["default"] = _default;
//# sourceMappingURL=ItemBarChart.js.map