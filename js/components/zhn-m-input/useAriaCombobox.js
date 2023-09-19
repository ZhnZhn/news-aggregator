"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useId = _interopRequireDefault(require("../hooks/useId"));
const useAriaCombobox = (isShow, isAutocomplete) => {
  const _controlsId = (0, _useId.default)();
  return [_controlsId, {
    role: "combobox",
    "aria-autocomplete": isAutocomplete ? "list" : "none",
    "aria-expanded": isShow,
    "aria-controls": _controlsId
  }];
};
var _default = useAriaCombobox;
exports.default = _default;
//# sourceMappingURL=useAriaCombobox.js.map