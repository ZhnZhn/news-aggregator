"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useRefSelectOption = function useRefSelectOption(DF_VALUE) {
  var ref = (0, _react.useRef)(DF_VALUE || null),
      _setOptionValue = (0, _react.useCallback)(function (option) {
    ref.current = option ? option.value : void 0;
  }, []);

  return [ref, _setOptionValue];
};

var _default = useRefSelectOption;
exports["default"] = _default;
//# sourceMappingURL=useRefSelectOption.js.map