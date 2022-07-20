"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../uiApi");

var FN_NOOP = function FN_NOOP() {};
/*eslint-disable react-hooks/exhaustive-deps */


var useKeyDown = function useKeyDown(hLoad, hClose) {
  if (hLoad === void 0) {
    hLoad = FN_NOOP;
  }

  if (hClose === void 0) {
    hClose = FN_NOOP;
  }

  return (0, _uiApi.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 13) {
      hLoad();
    } else if (keyCode === 27) {
      hClose();
    }
  }, []);
}; //hLoad, hClose

/*eslint-enable react-hooks/exhaustive-deps */


var _default = useKeyDown;
exports["default"] = _default;
//# sourceMappingURL=useKeyDown.js.map