"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../uiApi");

var _OptionFn = require("../../zhn-m-input/OptionFn");

var useRefSelectOption = function useRefSelectOption(DF_VALUE) {
  var ref = (0, _uiApi.useRef)(DF_VALUE || null),
      _setOptionValue = (0, _uiApi.useCallback)(function (option) {
    ref.current = (0, _OptionFn.getItemValue)(option);
  }, []);

  return [ref, _setOptionValue];
};

var _default = useRefSelectOption;
exports["default"] = _default;
//# sourceMappingURL=useRefSelectOption.js.map