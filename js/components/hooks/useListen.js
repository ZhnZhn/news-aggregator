"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

/*eslint-disable react-hooks/exhaustive-deps */
var useListen = function useListen(store, onStore, propNameListen) {
  if (propNameListen === void 0) {
    propNameListen = 'listen';
  }

  (0, _uiApi.useEffect)(function () {
    var unsubscribe = store[propNameListen](onStore);
    return unsubscribe;
  }, []); //store, onStore, propNameListen
};
/*eslint-enable react-hooks/exhaustive-deps */


var _default = useListen;
exports["default"] = _default;
//# sourceMappingURL=useListen.js.map