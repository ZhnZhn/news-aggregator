"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _fnNoop = function _fnNoop() {};
/*eslint-disable react-hooks/exhaustive-deps */


var useKeyDown = function useKeyDown(hLoad, hClose) {
  if (hLoad === void 0) {
    hLoad = _fnNoop;
  }

  if (hClose === void 0) {
    hClose = _fnNoop;
  }

  return (0, _react.useCallback)(function (evt) {
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