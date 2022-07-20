"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../../uiApi");

var useRefInput = function useRefInput(DF_VALUE) {
  var _refInput = (0, _uiApi.useRef)(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _getInputValue = (0, _uiApi.useCallback)(function () {
    var _input = (0, _uiApi.getRefValue)(_refInput);

    return _input ? _input.getValue() || DF_VALUE : DF_VALUE;
  }, []); //DF_VALUE

  /*eslint-enable react-hooks/exhaustive-deps */


  return [_refInput, _getInputValue];
};

var _default = useRefInput;
exports["default"] = _default;
//# sourceMappingURL=useRefInput.js.map