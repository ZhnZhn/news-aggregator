"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

/*eslint-disable react-hooks/exhaustive-deps */
var useKeyEnter = function useKeyEnter(fn, deps) {
  return (0, _uiApi.useCallback)(function (event) {
    if ((0, _isKeyEnter["default"])(event)) {
      fn(event);
    }
  }, deps || []);
};
/*eslint-enable react-hooks/exhaustive-deps */


var _default = useKeyEnter;
exports["default"] = _default;
//# sourceMappingURL=useKeyEnter.js.map