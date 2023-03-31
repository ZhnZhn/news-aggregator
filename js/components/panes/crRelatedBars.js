"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _isArr = Array.isArray,
  _getObjectKeys = Object.keys,
  _sortTupleBy2 = function _sortTupleBy2(arr1, arr2) {
    return arr2[1] - arr1[1];
  };
var crRelatedBars = function crRelatedBars(articles) {
  if (!_isArr(articles)) {
    return;
  }
  var hm = articles.reduce(function (hm, item) {
      (item.related || '').split('|').forEach(function (category) {
        if (hm[category]) {
          ++hm[category];
        } else {
          hm[category] = 1;
        }
      });
      return hm;
    }, Object.create(null)),
    _relatedBars = _getObjectKeys(hm).map(function (key) {
      return [key, hm[key]];
    });
  return _relatedBars.sort(_sortTupleBy2);
};
var _default = crRelatedBars;
exports["default"] = _default;
//# sourceMappingURL=crRelatedBars.js.map