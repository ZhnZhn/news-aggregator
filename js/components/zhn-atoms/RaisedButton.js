"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var CL_BT = 'bt-raised';
var CL_BT_SPAN = 'bt-raised__span';
var S = {
  PRIMARY_SPAN: {
    color: '#80c040'
  }
};

var RaisedButton = function RaisedButton(_ref) {
  var isPrimary = _ref.isPrimary,
      style = _ref.style,
      clDiv = _ref.clDiv,
      caption = _ref.caption,
      onClick = _ref.onClick;

  var _spanStyle = isPrimary ? S.PRIMARY_SPAN : void 0;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: CL_BT,
    style: style,
    type: "button",
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: clDiv,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: CL_BT_SPAN,
        style: _spanStyle,
        children: caption
      })
    })
  });
};

var _default = RaisedButton;
exports["default"] = _default;
//# sourceMappingURL=RaisedButton.js.map