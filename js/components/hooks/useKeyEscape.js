"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

/*eslint-disable react-hooks/exhaustive-deps */
var useKeyEscape = function useKeyEscape(onKeyEscape) {
  return (0, _react.useCallback)(function (event) {
    var _ref = event || {},
        keyCode = _ref.keyCode;

    if (keyCode === 27) {
      onKeyEscape();
    }
  }, []);
}; // onKeyEscape

/*eslint-enable react-hooks/exhaustive-deps */


var _default = useKeyEscape;
exports["default"] = _default;
//# sourceMappingURL=useKeyEscape.js.map