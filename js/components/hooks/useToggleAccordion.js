"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useToggleAccordion = () => {
  const _refTuple = (0, _uiApi.useRef)([]);
  return (0, _uiApi.useCallback)((is, caption, toggle) => {
    const [_prevCaption, _prevToggle] = (0, _uiApi.getRefValue)(_refTuple);
    if (is) {
      if (!_prevCaption) {
        (0, _uiApi.setRefValue)(_refTuple, [caption, toggle]);
      } else if (caption !== _prevCaption) {
        _prevToggle();
        (0, _uiApi.setRefValue)(_refTuple, [caption, toggle]);
      }
    } else {
      if (caption === _prevCaption) {
        (0, _uiApi.setRefValue)(_refTuple, [null, null]);
      }
    }
  }, []);
};
var _default = exports.default = useToggleAccordion;
//# sourceMappingURL=useToggleAccordion.js.map