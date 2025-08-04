"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fUseKey = require("./fUseKey");
var _useToggle = _interopRequireDefault(require("./useToggle"));
const FN_NOOP = () => {};
const useCheckBox = function (initialValue, onCheck, onUnCheck) {
  if (onCheck === void 0) {
    onCheck = FN_NOOP;
  }
  if (onUnCheck === void 0) {
    onUnCheck = FN_NOOP;
  }
  const [isChecked, toggleIsChecked] = (0, _useToggle.default)(initialValue),
    hClick = () => {
      (isChecked ? onUnCheck : onCheck)();
      toggleIsChecked();
    },
    hKeyDown = evt => {
      if ((0, _fUseKey.isKeyEnterOrSpace)(evt)) {
        evt.preventDefault();
        hClick();
      }
    };
  return [isChecked, hClick, hKeyDown];
};
var _default = exports.default = useCheckBox;
//# sourceMappingURL=useCheckBox.js.map