"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var utils = {
  isInCont: function isInCont(arrComps, comp) {
    var key = comp.key,
        _max = arrComps.length;
    var i = 0;
    for (i; i < _max; i++) {
      if (arrComps[i].key === key) {
        return true;
      }
    }
    return false;
  }
};

exports.default = utils;
//# sourceMappingURL=utils.js.map