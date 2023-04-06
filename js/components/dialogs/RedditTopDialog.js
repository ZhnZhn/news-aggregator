"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var ASSET_OPTIONS = [["askscience"], ["books"], ["explainlikeimfive"], ["LifeProTips"], ["todayilearned"], ["science"], ["worldnews"]],
  DF_ASSET = ASSET_OPTIONS[0],
  INPUT_CONFIGS = [['s', 'subreddit', 'Subreddit', ASSET_OPTIONS, DF_ASSET]],
  _crDfInputs = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS),
  INITIAL_INPUTS = _crDfInputs[0],
  TOGGLES = _crDfInputs[1],
  IS_INPUTS = _crDfInputs[2];
var RedditTopDialog = function RedditTopDialog(props) {
  return (0, _jsxRuntime.jsx)(_DialogStackInputs["default"], (0, _extends2["default"])({}, props, {
    caption: "Top By",
    loadId: "RD",
    INPUT_CONFIGS: INPUT_CONFIGS,
    INITIAL_INPUTS: INITIAL_INPUTS,
    TOGGLES: TOGGLES,
    IS_INPUTS: IS_INPUTS,
    children: (0, _jsxRuntime.jsx)(_Links.RedditLink, {})
  }));
};
var _default = RedditTopDialog;
exports["default"] = _default;
//# sourceMappingURL=RedditTopDialog.js.map