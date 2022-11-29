"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var SORT_BY_OPTIONS = [["PublishedAt", " published_at"], ["Relevancy", "relevance_score"]],
  DF_SORT_BY = SORT_BY_OPTIONS[0],
  DF_TERM = "Weather",
  INPUT_CONFIGS = [['t', 'search', (0, _DialogFn.crTextFieldCaption)('Term', DF_TERM), DF_TERM, void 0, true], ['s', 'category', 'Category', _TheNewsApiDialogFn.CATEGORY_OPTIONS, _TheNewsApiDialogFn.DF_CATEGORY, true], ['s', 'sortBy', 'SortBy', SORT_BY_OPTIONS, DF_SORT_BY]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var TheNewsApiSearchDialog = function TheNewsApiSearchDialog(props) {
  var caption = (0, _DialogFn.getPaneCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: caption,
    loadId: "TNS",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.TheNewsApiLink, {})
  }));
};
var _default = TheNewsApiSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiSearchDialog.js.map