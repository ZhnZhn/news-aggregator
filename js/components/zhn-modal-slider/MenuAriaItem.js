"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useRegRef = _interopRequireDefault(require("../hooks/useRegRef"));

var _jsxRuntime = require("react/jsx-runtime");

var MenuAriaItem = function MenuAriaItem(_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      children = _ref2.children,
      onReg = _ref2.onReg,
      onClick = _ref2.onClick;

  var _ref = (0, _react.useRef)(null),
      _hKeyPress = (0, _react.useCallback)(function (evt) {
    evt.preventDefault();
    var which = evt.which;

    if (which === 13 || which === 32) {
      onClick();
    }
  }, [onClick]);

  (0, _useRegRef["default"])(onReg, _ref);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: onReg ? _ref : void 0,
    className: className,
    style: style,
    role: "menuitem",
    tabIndex: "0",
    onClick: onClick,
    onKeyPress: _hKeyPress,
    children: children
  });
};

var _default = MenuAriaItem;
exports["default"] = _default;
//# sourceMappingURL=MenuAriaItem.js.map