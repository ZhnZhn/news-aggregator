"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var CL_NOT_SELECTED = 'not-selected';
var S = {
  ROOT: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    lineHeight: '24px',
    width: 26,
    height: 26,
    textAlign: 'center',
    cursor: 'pointer'
  }
};

var CircleButton = function CircleButton(props) {
  var _props$caption = props.caption,
      caption = _props$caption === void 0 ? '' : _props$caption,
      className = props.className,
      style = props.style,
      title = props.title,
      isWithoutDefault = props.isWithoutDefault,
      onClick = props.onClick,
      _className = className ? className + " " + CL_NOT_SELECTED : CL_NOT_SELECTED,
      _style = isWithoutDefault ? style : (0, _extends2["default"])({}, S.ROOT, {}, style);

  return _react["default"].createElement("button", {
    className: _className,
    style: _style,
    title: title,
    onClick: onClick
  }, caption);
};

var _default = CircleButton;
exports["default"] = _default;
//# sourceMappingURL=CircleButton.js.map