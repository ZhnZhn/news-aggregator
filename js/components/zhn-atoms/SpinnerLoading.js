"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var SpinnerLoading = function SpinnerLoading(_ref) {
  var style = _ref.style,
      isFailed = _ref.isFailed;

  var _dataLoader = isFailed ? "circle-failed" : "circle";

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: style,
    "data-loader": _dataLoader
  });
};

var _default = SpinnerLoading;
exports["default"] = _default;
//# sourceMappingURL=SpinnerLoading.js.map