"use strict";

exports.__esModule = true;
exports.getRedditTopConfig = void 0;
var _DialogFn = require("./DialogFn");
var _configReddit = require("./configReddit");
const LISTINGS_OPTIONS = ["top", "rising"];
const _crInputConfigs = () => [(0, _DialogFn.crInputSuggestConfig)('listings', LISTINGS_OPTIONS, {
  isInput: true
}), (0, _DialogFn.crInputSuggestConfig)('subreddit', _configReddit.SUBRREDIT_OPTIONS, {
  is: true,
  isInput: true,
  isNotFirstUpperCase: true
}), (0, _DialogFn.crInputSelectConfig)('t', _configReddit.PERIOD_OPTIONS, {
  caption: "Period",
  dfIndex: 1,
  isNotFirstUpperCase: true
}), (0, _DialogFn.crInputSelectConfig)('limit', _configReddit.LIMIT_OPTIONS)];
const getRedditTopConfig = exports.getRedditTopConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crRedditTopConfig.js.map