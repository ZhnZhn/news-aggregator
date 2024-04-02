"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useRegRef = onReg => {
  const ref = (0, _uiApi.useRef)(null);
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    const _node = ref.current;
    if ((0, _uiApi.isFn)(onReg) && _node) {
      onReg(_node);
    }
    return () => {
      ref.current = null;
    };
  }, []);
  //onReg, ref
  /*eslint-enable react-hooks/exhaustive-deps */
  return ref;
};
var _default = exports.default = useRegRef;
//# sourceMappingURL=useRegRef.js.map