"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var S = {
  ROOT: {
    marginTop: '16px',
    marginLeft: '8px'
  },
  SPAN: {
    color: 'black'
  }
};

var PoweredBy = function PoweredBy(_ref) {
  var rootStyle = _ref.rootStyle,
      spanStyle = _ref.spanStyle,
      children = _ref.children;
  return _react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, S.ROOT, {}, rootStyle)
  }, _react["default"].createElement("span", {
    style: (0, _extends2["default"])({}, S.SPAN, {}, spanStyle)
  }, "Powered by\xA0\xA0"), children);
};

var _default = PoweredBy;
exports["default"] = _default;
//# sourceMappingURL=PoweredBy.js.map