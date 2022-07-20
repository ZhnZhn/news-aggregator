"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useBool = function useBool(initialValue) {
  var _useState = (0, _uiApi.useState)(function () {
    return !!initialValue;
  }),
      is = _useState[0],
      setIs = _useState[1];

  return [is].concat((0, _uiApi.useMemo)(function () {
    return [//setTrue
    function () {
      return setIs(true);
    }, //setFalse
    function () {
      return setIs(false);
    }];
  }, []));
};

var _default = useBool;
exports["default"] = _default;
//# sourceMappingURL=useBool.js.map