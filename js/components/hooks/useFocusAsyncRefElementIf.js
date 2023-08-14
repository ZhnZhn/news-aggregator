"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useFocusAsyncRefElementIf = (is, refOrFn, mls) => {
  (0, _uiApi.useEffect)(() => {
    if (is) {
      (0, _uiApi.focusAsyncRefElement)(refOrFn, mls);
    }
  }, [is, refOrFn, mls]);
};
var _default = useFocusAsyncRefElementIf;
exports.default = _default;
//# sourceMappingURL=useFocusAsyncRefElementIf.js.map