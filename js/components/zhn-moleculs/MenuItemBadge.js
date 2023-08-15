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
  },
  S_CLOSE = {
    color: 'black'
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
    _badgeStyle = (0, _crStyle.crStyle2)(S_BADGE, !isOpen && S_CLOSE);
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
var _default = MenuItemBadge;
exports.default = _default;
//# sourceMappingURL=MenuItemBadge.js.map