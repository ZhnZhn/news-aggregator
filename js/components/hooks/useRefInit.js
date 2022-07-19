"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useRefInit = function useRefInit(crValue) {
  var ref = (0, _uiApi.useRef)(null);

  if (ref.current === null) {
    ref.current = crValue();
  }

  return ref.current;
};

var _default = useRefInit;
exports["default"] = _default;
//# sourceMappingURL=useRefInit.js.map