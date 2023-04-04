"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
var LABEL_WIDTH = 140,
  MAX_BAR_WIDTH = 200,
  S_TEXT_ELLIPSIS = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  S_FONT = {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  S_ROW = {
    display: 'flex'
  },
  S_LABEL = (0, _extends2["default"])({}, S_FONT, S_TEXT_ELLIPSIS, {
    display: 'inline-block',
    width: LABEL_WIDTH,
    paddingRight: 8,
    textAlign: 'right'
  }),
  S_COUNT = (0, _extends2["default"])({}, S_FONT, {
    paddingLeft: 6
  });
var _crBarStyle = function _crBarStyle(color, maxValue, value) {
  return {
    display: 'inline-block',
    height: '1.2rem',
    width: MAX_BAR_WIDTH * value / maxValue,
    background: color
  };
};
var BarChart = (0, _uiApi.memo)(function (_ref) {
  var style = _ref.style,
    items = _ref.items,
    maxValue = _ref.maxValue,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'darkcyan' : _ref$color;
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    children: items.map(function (item) {
      return (0, _jsxRuntime.jsxs)("div", {
        style: S_ROW,
        children: [(0, _jsxRuntime.jsx)("span", {
          style: S_LABEL,
          children: item[0]
        }), (0, _jsxRuntime.jsx)("span", {
          style: _crBarStyle(color, maxValue, item[1])
        }), (0, _jsxRuntime.jsx)("span", {
          style: S_COUNT,
          children: item[1]
        })]
      }, item[0]);
    })
  });
});
var _default = BarChart;
exports["default"] = _default;
//# sourceMappingURL=BarChart.js.map