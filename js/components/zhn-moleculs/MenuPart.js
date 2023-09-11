"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _MenuItem = _interopRequireDefault(require("../zhn-atoms/MenuItem"));
var _CL = require("../styles/CL");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_MENU_ITEM = _CL.CL_ROW_NEWS_SOURCE + " " + _CL.CL_SELECT_NONE;
const _renderMenuItems = option => {
  const {
    items,
    hmItems,
    onClick,
    ...restItemProps
  } = option;
  return (items || []).map((item, index) => {
    const _itemConf = {
      ...(hmItems || {})[item.id],
      ...restItemProps
    };
    return (0, _jsxRuntime.jsx)(_MenuItem.default, {
      className: CL_MENU_ITEM,
      caption: _itemConf.menuTitle,
      onClick: (0, _uiApi.bindTo)(onClick, _itemConf)
    }, index);
  });
};
const MenuPart = _ref => {
  let {
    caption,
    isInitClose,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: caption,
    isClose: isInitClose,
    children: _renderMenuItems(restProps)
  });
};
var _default = MenuPart;
exports.default = _default;
//# sourceMappingURL=MenuPart.js.map