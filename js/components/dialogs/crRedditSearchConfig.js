"use strict";

exports.__esModule = true;
exports.getRedditSearchConfig = void 0;
var _DialogFn = require("./DialogFn");
var _configReddit = require("./configReddit");
const DF_PERIOD = _configReddit.PERIOD_OPTIONS[3],
  DF_LIMIT = _configReddit.LIMIT_OPTIONS[0],
  DF_QUERY = "",
  SORTBY_OPTIONS = [["relevance"], ["hot"], ["top"], ["new"], ["comments"]],
  DF_SORTBY = SORTBY_OPTIONS[2],
  _crInputConfigs = () => [(0, _DialogFn.crInputSuggestConfig)('subreddit', _configReddit.SUBRREDIT_OPTIONS, {
    is: true
  }), (0, _DialogFn.crTextFieldConfig)('q', {
    caption: (0, _DialogFn.crTextFieldCaption)('Query', DF_QUERY),
    dfValue: DF_QUERY,
    is: true
  }), (0, _DialogFn.crInputSelectConfig)('t', _configReddit.PERIOD_OPTIONS, {
    caption: "Period",
    dfOption: DF_PERIOD
  }), (0, _DialogFn.crInputSelectConfig)('limit', _configReddit.LIMIT_OPTIONS, {
    dfOption: DF_LIMIT
  }), (0, _DialogFn.crInputSelectConfig)('sort', SORTBY_OPTIONS, {
    caption: "SortBy",
    dfOption: DF_SORTBY
  })];
const getRedditSearchConfig = exports.getRedditSearchConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crRedditSearchConfig.js.map