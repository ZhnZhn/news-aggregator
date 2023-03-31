"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
var S_FONT = {
  fontSize: '1rem',
  fontWeight: 'bold',
  verticalAlign: 'top'
};
var S_LABEL = (0, _extends2["default"])({}, S_FONT, {
    display: 'inline-block',
    width: 140,
    paddingRight: 8,
    textAlign: 'right'
  }),
  S_COUNT = (0, _extends2["default"])({}, S_FONT, {
    paddingLeft: 6
  });
var _crBarStyle = function _crBarStyle(color, maxValue, value) {
  return {
    display: 'inline-block',
    width: 200 * value / maxValue,
    height: '1rem',
    background: color
  };
};
var BarChart = (0, _uiApi.memo)(function (_ref) {
  var items = _ref.items,
    maxValue = _ref.maxValue,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'darkcyan' : _ref$color;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map(function (item) {
      return (0, _jsxRuntime.jsxs)("div", {
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