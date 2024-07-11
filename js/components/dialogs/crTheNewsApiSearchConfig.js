"use strict";

exports.__esModule = true;
exports.getTheNewsApiSearchConfig = void 0;
var _DialogFn = require("./DialogFn");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
const SORT_BY_OPTIONS = [["PublishedAt", " published_at"], ["Relevancy", "relevance_score"]],
  DF_TERM = "Weather",
  _crInputConfig = () => [(0, _DialogFn.crTextFieldConfig)('search', {
    caption: (0, _DialogFn.crTextFieldCaption)('Term', DF_TERM),
    dfValue: DF_TERM,
    is: true
  }), (0, _DialogFn.crInputSuggestConfig)('category', _TheNewsApiDialogFn.CATEGORY_OPTIONS), (0, _DialogFn.crInputSelectConfig)('sortBy', SORT_BY_OPTIONS)];
const getTheNewsApiSearchConfig = exports.getTheNewsApiSearchConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfig);
//# sourceMappingURL=crTheNewsApiSearchConfig.js.map