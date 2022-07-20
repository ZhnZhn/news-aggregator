"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useProperty = function useProperty(initialValue) {
  var ref = (0, _react.useRef)(initialValue);
  return (0, _react.useMemo)(function () {
    return [//setValue
    function (v) {
      ref.current = v;
    }, //getValue
    function () {
      return ref.current;
    }];
  }, []);
};

var _default = useProperty;
exports["default"] = _default;
//# sourceMappingURL=useProperty.js.map