"use strict";

exports.__esModule = true;
exports.getRedditTopConfig = void 0;
var _DialogFn = require("./DialogFn");
var _configReddit = require("./configReddit");
const DF_PERIOD = _configReddit.PERIOD_OPTIONS[1],
  DF_LIMIT = _configReddit.LIMIT_OPTIONS[0],
  _crInputConfigs = () => [(0, _DialogFn.crInputSuggestConfig)('subreddit', _configReddit.SUBRREDIT_OPTIONS, {
    is: true,
    isInput: true
  }), (0, _DialogFn.crInputSelectConfig)('t', _configReddit.PERIOD_OPTIONS, {
    caption: "Period",
    dfOption: DF_PERIOD
  }), (0, _DialogFn.crInputSelectConfig)('limit', _configReddit.LIMIT_OPTIONS, {
    dfOption: DF_LIMIT
  })];
const getRedditTopConfig = exports.getRedditTopConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crRedditTopConfig.js.map