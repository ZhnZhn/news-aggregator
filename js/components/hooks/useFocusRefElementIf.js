"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var useFocusRefElementIf = function useFocusRefElementIf(isShow, refFocusItem) {
  var _refElement = (0, _uiApi.useRef)(),
    _refPrevElement = (0, _uiApi.useRef)();

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (isShow && !(0, _uiApi.getRefValue)(_refPrevElement)) {
      (0, _uiApi.setRefValue)(_refPrevElement, document.activeElement);
      (0, _uiApi.focusRefElement)(refFocusItem, _refElement);
    } else if (!isShow) {
      (0, _uiApi.focusRefElement)(_refPrevElement);
      (0, _uiApi.setRefValue)(_refPrevElement, null);
    }
  }, [isShow]);
  // refFocusItem
  /*eslint-enable react-hooks/exhaustive-deps */

  return _refElement;
};
var _default = useFocusRefElementIf;
exports["default"] = _default;
//# sourceMappingURL=useFocusRefElementIf.js.map