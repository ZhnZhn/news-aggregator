"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
const _getObjectKeys = Object.keys,
  _sortTupleBy2 = (arr1, arr2) => arr2[1] - arr1[1];
const crRelatedBars = articles => {
  if (!(0, _isTypeFn.isArr)(articles)) {
    return;
  }
  const hm = articles.reduce((hm, item) => {
      (item.related || '').split('|').forEach(category => {
        if (hm[category]) {
          ++hm[category];
        } else {
          hm[category] = 1;
        }
      });
      return hm;
    }, Object.create(null)),
    _relatedBars = _getObjectKeys(hm).map(key => [key, hm[key]]);
  return _relatedBars.sort(_sortTupleBy2);
};
var _default = exports.default = crRelatedBars;
//# sourceMappingURL=crRelatedBars.js.map