"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _CL = require("../styles/CL");

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _MenuItemBadge = _interopRequireDefault(require("./MenuItemBadge"));

var _jsxRuntime = require("preact/jsx-runtime");

var _excluded = ["items", "hmItems", "itemData", "onClick", "onClickBadge"],
    _excluded2 = ["styleConfig", "caption", "isInitClose"];
var _assign = Object.assign;

var _createOnKeyDown = function _createOnKeyDown(onClick) {
  return function (event) {
    if (event.keyCode === 13) {
      onClick();
    }
  };
};

var _renderMenuItems = function _renderMenuItems(TS, option) {
  var _option$items = option.items,
      items = _option$items === void 0 ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === void 0 ? {} : _option$hmItems,
      itemData = option.itemData,
      onClick = option.onClick,
      onClickBadge = option.onClickBadge,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(option, _excluded);
  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + " " + _CL.CL_SELECT_NONE : _CL.CL_SELECT_NONE,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle,
        badgeEl = itemData[item.id] ? (0, _jsxRuntime.jsx)(_MenuItemBadge["default"], {
      style: TS.BADGE,
      itemBadge: itemData[item.id],
      itemConf: _itemConf,
      onClick: onClickBadge
    }) : null;

    _assign(_itemConf, rest);

    var _onClick = onClick.bind(null, _itemConf);

    return (0, _jsxRuntime.jsxs)("div", {
      role: "menuitem",
      tabIndex: "0",
      className: _className,
      onClick: _onClick,
      onKeyDown: _createOnKeyDown(_onClick),
      children: [menuTitle, badgeEl]
    }, index);
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded2);
  return (0, _jsxRuntime.jsx)(_OpenClose["default"], {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    itemStyle: TS.ITEM,
    children: _renderMenuItems(TS, restProps)
  });
};
/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/


var _default = MenuPart;
exports["default"] = _default;
//# sourceMappingURL=MenuPart.js.map