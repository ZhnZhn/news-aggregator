"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BADGE = {
  display: 'inline-block',
  color: 'grey',
  backgroundColor: '#3f5178',
  width: 32,
  height: 32,
  paddingRight: 5,
  paddingLeft: 5,
  borderRadius: '30%',
  textAlign: 'center',
  float: 'right',
  cursor: 'pointer'
};
const MenuItemBadge = _ref => {
  let {
    style,
    itemBadge,
    itemConf,
    onClick
  } = _ref;
  const _hClick = evt => {
      evt.stopPropagation();
      onClick(itemConf);
    },
    {
      isOpen
    } = itemBadge || {},
    _badgeStyle = (0, _crStyle.crStyle2)(S_BADGE, !isOpen && _crStyle.S_COLOR_BLACK);
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    tabIndex: "-1",
    style: {
      ..._badgeStyle,
      ...style
    },
    onClick: _hClick,
    children: "V"
  });
};
var _default = exports.default = MenuItemBadge;
//# sourceMappingURL=MenuItemBadge.js.map