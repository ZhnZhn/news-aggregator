"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var useFocusRefElementIf = function useFocusRefElementIf(isShow) {
  var _refElement = (0, _uiApi.useRef)(),
    _refPrevElement = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(function () {
    if (isShow && !_refPrevElement.current) {
      _refPrevElement.current = document.activeElement;
      (0, _uiApi.focusRefElement)(_refElement);
    } else if (!isShow) {
      (0, _uiApi.focusRefElement)(_refPrevElement);
      _refPrevElement.current = null;
    }
  }, [isShow]);
  return _refElement;
};
var _default = useFocusRefElementIf;
exports["default"] = _default;
//# sourceMappingURL=useFocusRefElementIf.js.map