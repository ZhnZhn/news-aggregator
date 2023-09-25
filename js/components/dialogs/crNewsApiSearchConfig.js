"use strict";

exports.__esModule = true;
exports.getNewsApiSearchConfig = void 0;
var _DialogFn = require("./DialogFn");
const SORT_BY_OPTIONS = [["Relevancy", "relevancy"], ["Popularity", "popularity"], ["PublishedAt", "publishedAt"]],
  DF_TERM = "Weather",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)('symbol', {
    caption: (0, _DialogFn.crTextFieldCaption)('Term', DF_TERM),
    dfValue: DF_TERM,
    is: true
  }), (0, _DialogFn.crInputSelectConfig)('sortBy', SORT_BY_OPTIONS, {
    is: true
  })];
const getNewsApiSearchConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
exports.getNewsApiSearchConfig = getNewsApiSearchConfig;
//# sourceMappingURL=crNewsApiSearchConfig.js.map