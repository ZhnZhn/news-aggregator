"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var SORT_BY_OPTIONS = [["Relevancy", "relevancy"], ["Popularity", "popularity"], ["PublishedAt", "publishedAt"]],
  DF_SORT_BY = SORT_BY_OPTIONS[0],
  DF_TERM = "Weather",
  INPUT_CONFIGS = [['t', 'symbol', (0, _DialogFn.crTextFieldCaption)('Term', DF_TERM), DF_TERM, true], ['s', 'sortBy', 'SortBy', SORT_BY_OPTIONS, DF_SORT_BY, true]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var NewsApiSearchDialog = function NewsApiSearchDialog(props) {
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: "Search",
    loadId: "NS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.NewsApiLink, {})
  }));
};
var _default = NewsApiSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=NewsApiSearchDialog.js.map