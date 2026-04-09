"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
const useKeyDown = (hLoad, hClose) => (0, _uiApi.useCallback)(evt => {
  if (evt.key === _uiApi.KEY_ENTER) {
    hLoad?.();
  } else if (evt.key === _uiApi.KEY_ESCAPE) {
    hClose?.();
  }
}, []);
//hLoad, hClose
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = useKeyDown;
//# sourceMappingURL=useKeyDown.js.map