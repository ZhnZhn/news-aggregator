"use strict";

exports.__esModule = true;
exports.getStackTaggedConfig = void 0;
var _DialogFn = require("./DialogFn");
const SORT_BY_OPTIONS = [["Activity, Recent Day", "activity"], ["Creation Date", "creation"], ["Score", "votes"], ["Hot Tab", "hot"], ["Hot Week Tab", "week"], ["Hot Month Tab", "month"]],
  DF_SORT_BY = SORT_BY_OPTIONS[4],
  DF_TAG = "CSS",
  _crInputConfigs = () => [(0, _DialogFn.crTextFieldConfig)('tag', {
    caption: (0, _DialogFn.crTextFieldCaption)('Tag', DF_TAG),
    dfValue: DF_TAG,
    is: true
  }), (0, _DialogFn.crInputSelectConfig)('sortBy', SORT_BY_OPTIONS, {
    dfOption: DF_SORT_BY,
    is: true
  }), (0, _DialogFn.crFromToDateConfig)('_ft')];
const getStackTaggedConfig = exports.getStackTaggedConfig = (0, _DialogFn.fGetDialogConfig)(_crInputConfigs);
//# sourceMappingURL=crStackTaggedConfig.js.map