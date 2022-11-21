"use strict";

exports.__esModule = true;
exports.INITIAL_CAREGORY_VALUE = exports.DF_CATEGORY = exports.CATEGORY_OPTIONS = void 0;
var _OptionFn = require("../zhn-m-input/OptionFn");
var _CATEGORIES = ['all', 'general', 'science', 'sports', 'business', 'health', 'tech', 'politics', 'food', 'travel'];
var CATEGORY_OPTIONS = (0, _OptionFn.crSelectOptions)(_CATEGORIES);
exports.CATEGORY_OPTIONS = CATEGORY_OPTIONS;
var DF_CATEGORY = CATEGORY_OPTIONS[0];
exports.DF_CATEGORY = DF_CATEGORY;
var INITIAL_CAREGORY_VALUE = (0, _OptionFn.getItemValue)(DF_CATEGORY);
exports.INITIAL_CAREGORY_VALUE = INITIAL_CAREGORY_VALUE;
//# sourceMappingURL=TheNewsApiDialogFn.js.map