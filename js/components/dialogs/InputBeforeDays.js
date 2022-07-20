"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

var _onTestDaysBefore = function _onTestDaysBefore(value) {
  var _n = parseInt(value, 10);

  return !Number.isNaN(_n) && _n > 0 && _n < 31 || value === '';
};

var InputBeforeDays = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var style = _ref.style,
      initValue = _ref.initValue;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
    style: style,
    ref: ref,
    caption: "Before Days, Max 30",
    initValue: initValue,
    errorMsg: "0<n<31 value must be",
    onTest: _onTestDaysBefore
  });
});
var _default = InputBeforeDays;
exports["default"] = _default;
//# sourceMappingURL=InputBeforeDays.js.map