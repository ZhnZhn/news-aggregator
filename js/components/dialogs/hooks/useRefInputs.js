"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../../uiApi");
var _OptionFn = require("../../zhn-m-input/OptionFn");
var _isStr = function _isStr(str) {
  return typeof str === 'string';
};
var useRefInputs = function useRefInputs(dfValues) {
  var _refValues = (0, _uiApi.useRef)(dfValues || Object.create(null)),
    _setValue = (0, _uiApi.useCallback)(function (input, id) {
      if (_isStr(id)) {
        _refValues.current[id] = (0, _OptionFn.getItemValue)(input);
      }
    }, []);
  return [_refValues, _setValue];
};
var _default = useRefInputs;
exports["default"] = _default;
//# sourceMappingURL=useRefInputs.js.map