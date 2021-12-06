"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

/*eslint-disable react-hooks/exhaustive-deps */
var useKeyDelete = function useKeyDelete(fn, deps) {
  return (0, _react.useCallback)(function (event) {
    if (event.keyCode === 46) {
      fn(event);
    }
  }, deps || []);
};
/*eslint-enable react-hooks/exhaustive-deps */


var _default = useKeyDelete;
exports["default"] = _default;
//# sourceMappingURL=useKeyDelete.js.map