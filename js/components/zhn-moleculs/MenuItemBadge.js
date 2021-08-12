"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _crStyle = _interopRequireDefault(require("../zhn-utils/crStyle"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  BADGE: {
    display: 'inline-block',
    color: 'grey',
    backgroundColor: '#3f5178',
    "float": 'right',
    width: 32,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: '30%',
    textAlign: 'center'
  },
  CLOSE: {
    color: 'black'
  }
};

var MenuItemBadge = function MenuItemBadge(_ref) {
  var style = _ref.style,
      itemBadge = _ref.itemBadge,
      itemConf = _ref.itemConf,
      onClick = _ref.onClick;

  var _hClick = function _hClick(event) {
    event.stopPropagation();
    onClick(itemConf);
  },
      _ref2 = itemBadge || {},
      isOpen = _ref2.isOpen,
      _badgeStyle = (0, _crStyle["default"])(S.BADGE, [!isOpen, S.CLOSE]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: (0, _extends2["default"])({}, _badgeStyle, style),
    onClick: _hClick,
    children: "V"
  });
};

var _default = MenuItemBadge;
exports["default"] = _default;
//# sourceMappingURL=MenuItemBadge.js.map