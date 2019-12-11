"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var SpinnerLoading = function SpinnerLoading(_ref) {
  var style = _ref.style,
      isFailed = _ref.isFailed;

  var _dataLoader = isFailed ? "circle-failed" : "circle";

  return _react["default"].createElement("span", {
    style: style,
    "data-loader": _dataLoader
  });
};

var _default = SpinnerLoading;
exports["default"] = _default;
//# sourceMappingURL=SpinnerLoading.js.map