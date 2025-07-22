"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _useEffectTimeoutIf = _interopRequireDefault(require("../hooks/useEffectTimeoutIf"));
const useCanBeHidden = canBeHidden => {
  const [hasBeenHidden, setHasBeenHidden] = (0, _uiApi.useState)(!1);
  (0, _useEffectTimeoutIf.default)(canBeHidden, () => setHasBeenHidden(!0), 500);
  if (!canBeHidden) {
    setHasBeenHidden(!1);
  }
  return hasBeenHidden ? _crStyle.S_NONE : _crStyle.S_BLOCK;
};
var _default = exports.default = useCanBeHidden;
//# sourceMappingURL=useCanBeHidden.js.map