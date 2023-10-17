"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _MenuItem = _interopRequireDefault(require("../zhn-atoms/MenuItem"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const CL_ITEM = 'row__topic';
const S_HORIZONTAL_LINE = {
  margin: '0 16px',
  borderBottom: '1px solid black'
};
const MenuTopic = _ref => {
  let {
    refBt,
    caption,
    items,
    style,
    itemStyle,
    onItem
  } = _ref;
  return _isArr(items) ? (0, _jsxRuntime.jsx)(_OpenClose.default, {
    refBt: refBt,
    style: style,
    itemStyle: itemStyle,
    caption: caption,
    children: items.map(config => _isArr(config) ? (0, _jsxRuntime.jsx)(_MenuItem.default, {
      className: CL_ITEM,
      caption: config[0],
      onClick: config[1]
    }, config[0]) : (0, _jsxRuntime.jsx)("div", {
      style: S_HORIZONTAL_LINE
    }, config))
  }) : (0, _jsxRuntime.jsx)(_MenuItem.default, {
    className: CL_ITEM,
    caption: caption,
    onClick: onItem
  }, caption);
};
var _default = exports.default = MenuTopic;
//# sourceMappingURL=MenuTopic.js.map