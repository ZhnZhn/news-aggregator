"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _MenuItem = _interopRequireDefault(require("../zhn/MenuItem"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ITEM = {
    position: 'relative'
  },
  S_PREV_PAGE = {
    position: 'absolute',
    top: 0,
    left: 16
  },
  S_TITLE = {
    paddingLeft: 16
  };
const MenuTitle = _ref => {
  let {
    refEl,
    titleCl,
    title,
    onClick
  } = _ref;
  return title ? (0, _jsxRuntime.jsxs)(_MenuItem.default, {
    refEl: refEl,
    className: titleCl,
    style: S_ITEM,
    onClick: onClick,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: S_PREV_PAGE,
      children: "<"
    }), (0, _jsxRuntime.jsx)("span", {
      style: S_TITLE,
      children: title
    })]
  }) : null;
};
var _default = exports.default = MenuTitle;
//# sourceMappingURL=MenuTitle.js.map