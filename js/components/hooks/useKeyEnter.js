"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _fUseKey = require("./fUseKey");
/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEnter = (fn, deps) => (0, _uiApi.useMemo)(() => (0, _uiApi.isFn)(fn) ? evt => {
  if ((0, _fUseKey.isKeyEnterOrSpace)(evt)) {
    fn(evt);
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = useKeyEnter;
//# sourceMappingURL=useKeyEnter.js.map