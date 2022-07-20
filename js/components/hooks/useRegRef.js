"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useRegRef = function useRegRef(onReg) {
  var ref = (0, _uiApi.useRef)(null);
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    var _node = ref.current;

    if (typeof onReg == 'function' && _node) {
      onReg(_node);
    }

    return function () {
      ref.current = null;
    };
  }, []); //onReg, ref

  /*eslint-enable react-hooks/exhaustive-deps */

  return ref;
};

var _default = useRegRef;
exports["default"] = _default;
//# sourceMappingURL=useRegRef.js.map