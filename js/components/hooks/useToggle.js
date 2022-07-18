"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _isBool = function _isBool(v) {
  return typeof v === 'boolean';
};

var useToggle = function useToggle(initialValue) {
  var _useState = (0, _react.useState)(function () {
    return !!initialValue;
  }),
      is = _useState[0],
      setIs = _useState[1];

  return [is, (0, _react.useCallback)(function (v) {
    if (_isBool(v)) {
      setIs(v);
    } else {
      setIs(function (is) {
        return !is;
      });
    }
  }, [])];
};

var _default = useToggle;
exports["default"] = _default;
//# sourceMappingURL=useToggle.js.map