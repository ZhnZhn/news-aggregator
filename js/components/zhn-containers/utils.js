"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var isInCont = function isInCont(arrComps, comp) {
  var key = comp.key;
  var i = 0;

  for (i; i < arrComps.length; i++) {
    if (arrComps[i].key === key) {
      return true;
    }
  }

  return false;
};

var _default = isInCont;
exports["default"] = _default;
//# sourceMappingURL=utils.js.map