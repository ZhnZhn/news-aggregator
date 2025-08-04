"use strict";

exports.__esModule = true;
exports.useKeyEnterOrSpace = exports.isKeyEnterOrSpace = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
const isKeyEnterOrSpace = evt => evt.key === _uiApi.KEY_ENTER || evt.key === _uiApi.KEY_SPACE;

/*eslint-disable react-hooks/exhaustive-deps */
exports.isKeyEnterOrSpace = isKeyEnterOrSpace;
const useKeyEnterOrSpace = (fn, deps) => (0, _uiApi.useMemo)(() => (0, _isTypeFn.isFn)(fn) ? evt => {
  if (isKeyEnterOrSpace(evt)) {
    fn();
  }
} : void 0, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */
exports.useKeyEnterOrSpace = useKeyEnterOrSpace;
//# sourceMappingURL=fUseKey.js.map