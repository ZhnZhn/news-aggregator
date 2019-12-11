"use strict";

exports.__esModule = true;
exports["default"] = void 0;
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
var _default = utils;
exports["default"] = _default;
//# sourceMappingURL=utils.js.map