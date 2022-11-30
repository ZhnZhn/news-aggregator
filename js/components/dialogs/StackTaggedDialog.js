"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _dt = _interopRequireDefault(require("../../utils/dt"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var INITIAL_FROM_DATE = _dt["default"].getFromDate(1),
  INITIAL_TO_DATE = _dt["default"].getToDate(),
  SORT_BY_OPTIONS = [["Activity, Recent Day", "activity"], ["Creation Date", "creation"], ["Score", "votes"], ["Hot Tab", "hot"], ["Hot Week Tab", "week"], ["Hot Month Tab", "month"]],
  DF_SORT_BY = SORT_BY_OPTIONS[4],
  DF_TAG = "CSS",
  INPUT_CONFIGS = [['t', 'tag', (0, _DialogFn.crTextFieldCaption)('Tag', DF_TAG), DF_TAG, void 0, true], ['s', 'sortBy', 'SortBy', SORT_BY_OPTIONS, DF_SORT_BY, true], ['ft', '_ft', 'From To Date', INITIAL_FROM_DATE, INITIAL_TO_DATE]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var StackTaggedDialog = function StackTaggedDialog(props) {
  var caption = (0, _DialogFn.getDialogCaption)(props.itemConf);
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: caption,
    loadId: "SO",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.StackOverflowLink, {})
  }));
};
var _default = StackTaggedDialog;
exports["default"] = _default;
//# sourceMappingURL=StackTaggedDialog.js.map