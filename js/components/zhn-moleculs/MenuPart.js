"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _MenuItem = _interopRequireDefault(require("../zhn-atoms/MenuItem"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuPart = _ref => {
  let {
    caption,
    isInitClose,
    items,
    hmItems,
    onClick,
    ...restItemProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_OpenClose.default, {
    caption: caption,
    isClose: isInitClose,
    children: (0, _uiApi.safeMap)(items, (item, index) => {
      const _itemConf = {
        ...(hmItems || {})[item.id],
        ...restItemProps
      };
      return (0, _jsxRuntime.jsx)(_MenuItem.default, {
        className: _crStyle.CL_ROW_NEWS_SOURCE,
        caption: _itemConf.menuTitle,
        onClick: (0, _uiApi.bindTo)(onClick, _itemConf)
      }, index);
    })
  });
};
var _default = exports.default = MenuPart;
//# sourceMappingURL=MenuPart.js.map