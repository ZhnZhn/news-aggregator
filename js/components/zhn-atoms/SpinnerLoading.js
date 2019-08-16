"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpinnerLoading = function SpinnerLoading(_ref) {
  var style = _ref.style,
      isFailed = _ref.isFailed;

  var _dataLoader = isFailed ? "circle-failed" : "circle";
  return _react2.default.createElement("span", { style: style, "data-loader": _dataLoader });
};

exports.default = SpinnerLoading;
//# sourceMappingURL=SpinnerLoading.js.map