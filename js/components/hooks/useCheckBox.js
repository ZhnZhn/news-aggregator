"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var _useToggle2 = _interopRequireDefault(require("./useToggle"));

var FN_NOOP = function FN_NOOP() {};

var useCheckBox = function useCheckBox(initialValue, onCheck, onUnCheck) {
  if (onCheck === void 0) {
    onCheck = FN_NOOP;
  }

  if (onUnCheck === void 0) {
    onUnCheck = FN_NOOP;
  }

  var _useToggle = (0, _useToggle2["default"])(initialValue),
      isChecked = _useToggle[0],
      toggleIsChecked = _useToggle[1],
      hClick = function hClick() {
    (isChecked ? onUnCheck : onCheck)();
    toggleIsChecked();
  },
      hKeyDown = function hKeyDown(evt) {
    if ((0, _isKeyEnter["default"])(evt)) {
      evt.preventDefault();
      hClick();
    }
  };

  return [isChecked, hClick, hKeyDown];
};

var _default = useCheckBox;
exports["default"] = _default;
//# sourceMappingURL=useCheckBox.js.map