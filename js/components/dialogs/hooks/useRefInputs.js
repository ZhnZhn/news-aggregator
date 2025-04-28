"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../../utils/isTypeFn");
var _uiApi = require("../../uiApi");
var _OptionFn = require("../../zhn-m-input/OptionFn");
const useRefInputs = dfValues => {
  const _refValues = (0, _uiApi.useRef)(dfValues || Object.create(null)),
    _setValue = (0, _uiApi.useCallback)((input, id) => {
      if ((0, _isTypeFn.isStr)(id)) {
        _refValues.current[id] = (0, _isTypeFn.isStr)(input) ? input === '' ? dfValues[id] : input : (0, _OptionFn.getItemValue)(input);
      }
    }, [dfValues]);
  return [_refValues, _setValue];
};
var _default = exports.default = useRefInputs;
//# sourceMappingURL=useRefInputs.js.map