"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));
/*eslint-disable react-hooks/exhaustive-deps */
const useKeyEnter = (fn, deps) => (0, _uiApi.useMemo)(() => (0, _uiApi.isFn)(fn) ? evt => {
  if ((0, _isKeyEnter.default)(evt)) {
    fn(evt);
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */
var _default = useKeyEnter;
exports.default = _default;
//# sourceMappingURL=useKeyEnter.js.map