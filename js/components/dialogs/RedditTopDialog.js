"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DialogStackInputs = _interopRequireDefault(require("./DialogStackInputs"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
const SUBRREDIT_OPTIONS = [["Amd"], ["askscience"], ["books"], ["FreeEBOOKS"], ["bicycling"], ["cardano"], ["cars"], ["Database"], ["SQL"], ["NoSQL"], ["dataengineering"], ["datascience"], ["dataisbeautiful"], ["datasets"], ["deeplearning"], ["devops"], ["docker"], ["Economy"], ["Economics"], ["AskEconomics"], ["GAMETHEORY"], ["explainlikeimfive"], ["europe"], ["Finance"], ["sustainableFinance"], ["JavaScript"], ["reactjs"], ["nextjs"], ["node"], ["webdev"], ["elixir"], ["programming"], ["hardware"], ["LifeProTips"], ["linux"], ["MachineLearning"], ["learnmachinelearning"], ["todayilearned"], ["science"], ["statistics"], ["StockMarket"], ["stocks"], ["smallbusiness"], ["travel"], ["visualization"], ["Renewable"], ["RenewableEnergy"], ["solar"], ["solarDIY"], ["batteries"], ["soccer"], ["football"], ["investing"], ["UpliftingNews"], ["news"], ["worldnews"]],
  DF_SUBRREDIT = SUBRREDIT_OPTIONS[0],
  PERIOD_OPTIONS = [["hour"], ["day"], ["week"], ["month"], ["year"], ["all"]],
  DF_PERIOD = PERIOD_OPTIONS[1],
  LIMIT_OPTIONS = [["10"], ["20"], ["30"]],
  DF_LIMIT = LIMIT_OPTIONS[1],
  INPUT_CONFIGS = [['s', 'subreddit', 'Subreddit', SUBRREDIT_OPTIONS, DF_SUBRREDIT, true], ['s', 't', 'Period', PERIOD_OPTIONS, DF_PERIOD], ['s', 'limit', 'Limit', LIMIT_OPTIONS, DF_LIMIT]],
  [INITIAL_INPUTS, TOGGLES, IS_INPUTS] = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
const RedditTopDialog = props => (0, _jsxRuntime.jsx)(_DialogStackInputs.default, {
  ...props,
  caption: "Top By",
  loadId: "RD",
  INPUT_CONFIGS: INPUT_CONFIGS,
  INITIAL_INPUTS: INITIAL_INPUTS,
  TOGGLES: TOGGLES,
  IS_INPUTS: IS_INPUTS,
  children: (0, _jsxRuntime.jsx)(_Links.RedditLink, {})
});
var _default = RedditTopDialog;
exports.default = _default;
//# sourceMappingURL=RedditTopDialog.js.map