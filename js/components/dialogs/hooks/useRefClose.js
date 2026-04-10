"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
const FN_NOOP = () => {};
const useRefClose = function (onClose, refEl) {
  if (onClose === void 0) {
    onClose = FN_NOOP;
  }
  const _refElDialog = (0, _uiApi.useRef)(null),
    _refDialog = refEl || _refElDialog;
  return [_refDialog, /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useCallback)(() => {
    const {
      current
    } = _refDialog;
    if (current?.focusPrevEl) {
      current.focusPrevEl();
    }
    onClose();
  }, [])
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */];
};
var _default = exports.default = useRefClose;
//# sourceMappingURL=useRefClose.js.map