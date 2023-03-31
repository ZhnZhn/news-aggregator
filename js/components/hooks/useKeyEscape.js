"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
var useKeyEscape = function useKeyEscape(onKeyEscape) {
  return (0, _uiApi.useCallback)(function (evt) {
    if (evt && evt.keyCode === 27) {
      onKeyEscape();
    }
  }, []);
};
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */
var _default = useKeyEscape;
exports["default"] = _default;
//# sourceMappingURL=useKeyEscape.js.map