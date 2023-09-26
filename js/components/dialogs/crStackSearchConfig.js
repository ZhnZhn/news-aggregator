"use strict";

exports.__esModule = true;
exports.getStackSearchConfig = void 0;
var _DialogFn = require("./DialogFn");
const SORT_BY_OPTIONS = [["Activity, Recent Day", "activity"], ["Creation Date", "creation"], ["Score", "votes"], ["Relevance", "relevance"]],
  DF_SORT_BY = SORT_BY_OPTIONS[2],
  DF_TAGGED = 'CSS',
  DF_IN_TITLE = 'flexbox',
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)('tagged', {
    caption: (0, _DialogFn.crTextFieldCaption)('Tagged', DF_TAGGED),
    dfValue: DF_TAGGED,
    is: true
  }), (0, _DialogFn.crTextFieldConfig)('inTitle', {
    caption: (0, _DialogFn.crTextFieldCaption)('In Title', DF_IN_TITLE),
    dfValue: DF_IN_TITLE,
    is: true
  }), (0, _DialogFn.crInputSelectConfig)('sortBy', SORT_BY_OPTIONS, {
    dfOption: DF_SORT_BY
  }), (0, _DialogFn.crFromToDateConfig)('_ft')];
const getStackSearchConfig = exports.getStackSearchConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crStackSearchConfig.js.map