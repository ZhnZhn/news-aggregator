"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var AppLabel = function AppLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      caption = _ref.caption,
      title = _ref.title,
      onClick = _ref.onClick;
  return _react["default"].createElement("span", {
    className: className,
    style: style,
    title: title,
    onClick: onClick
  }, caption);
};

var _default = AppLabel;
exports["default"] = _default;
//# sourceMappingURL=AppLabel.js.map