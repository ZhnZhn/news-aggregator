"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CL_BT = 'bt-raised';
var CL_BT_SPAN = 'bt-raised__span';
var S = {
  PRIMARY_SPAN: {
    color: 'greenyellow'
  }
};

var RaisedButton = function RaisedButton(_ref) {
  var rootStyle = _ref.rootStyle,
      clDiv = _ref.clDiv,
      caption = _ref.caption,
      isPrimary = _ref.isPrimary,
      isSumbit = _ref.isSumbit,
      onClick = _ref.onClick;

  var _spanStyle = isPrimary ? S.PRIMARY_SPAN : void 0;

  return _react["default"].createElement("button", {
    className: CL_BT,
    style: rootStyle,
    type: "button",
    tabIndex: 0,
    onClick: onClick
  }, _react["default"].createElement("div", {
    className: clDiv
  }, _react["default"].createElement("span", {
    className: CL_BT_SPAN,
    style: _spanStyle
  }, caption)));
};

var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map