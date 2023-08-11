"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useModalFocus = isShow => {
  const _refEl = (0, _uiApi.useRef)(),
    _refPrevFocused = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(() => {
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevFocused, (document || {}).activeElement);
      (0, _uiApi.focusRefElement)(_refEl);
    } else {
      (0, _uiApi.focusRefElement)(_refPrevFocused);
    }
  }, [isShow]);
  return _refEl;
};
var _default = useModalFocus;
exports.default = _default;
//# sourceMappingURL=useModalFocus.js.map