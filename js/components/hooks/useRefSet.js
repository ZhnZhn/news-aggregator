"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useRefSet = function useRefSet(initialValue) {
  var ref = (0, _react.useRef)(initialValue),
      setValue = (0, _react.useCallback)(function (value) {
    ref.current = value;
  }, []);
  return [ref, setValue];
};

var _default = useRefSet;
exports["default"] = _default;
//# sourceMappingURL=useRefSet.js.map