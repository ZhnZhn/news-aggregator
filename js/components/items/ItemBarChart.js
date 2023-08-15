"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useItemType = _interopRequireDefault(require("./useItemType1"));
var _ItemType = _interopRequireDefault(require("./ItemType1"));
var _BarChart = _interopRequireDefault(require("../zhn-charts/BarChart"));
var _Item = require("./Item.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BAR_CHART = {
  padding: '6px 0'
};
const _isArr = Array.isArray;
const ItemBarChart = _ref => {
  let {
    categoryBars,
    maxValue,
    numberOfItems
  } = _ref;
  const [isClosed, setIsClosed] = (0, _uiApi.useState)(false),
    _closeItem = (0, _uiApi.useMemo)(() => () => setIsClosed(true), []),
    [isShowDescr, _hToggle] = (0, _useItemType.default)();
  (0, _uiApi.useEffect)(() => {
    if (_isArr(categoryBars)) {
      setIsClosed(false);
    }
  }, [categoryBars]);
  const _style = (0, _crStyle.crStyle2)(_Item.S_ITEM, isClosed && _Item.S_NONE);
  return _isArr(categoryBars) ? (0, _jsxRuntime.jsx)("div", {
    style: _style,
    children: (0, _jsxRuntime.jsx)(_ItemType.default, {
      title: "Categories Bar Chart (" + numberOfItems + ")",
      isShowDescr: isShowDescr,
      onClick: _hToggle,
      onToggle: _hToggle,
      onClose: _closeItem,
      children: (0, _jsxRuntime.jsx)(_BarChart.default, {
        style: S_BAR_CHART,
        items: categoryBars,
        maxValue: maxValue
      })
    })
  }) : null;
};
var _default = ItemBarChart;
exports.default = _default;
//# sourceMappingURL=ItemBarChart.js.map