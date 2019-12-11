"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));

var _MenuItemBadge = _interopRequireDefault(require("./MenuItemBadge"));

//import PropTypes from 'prop-types'
var CL_NOT_S = 'not-selected';

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
      rest = (0, _objectWithoutPropertiesLoose2["default"])(option, ["items", "hmItems", "itemData", "onClick", "onClickBadge"]);
  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + " " + CL_NOT_S : CL_NOT_S,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle,
        badgeEl = itemData[item.id] ? _react["default"].createElement(_MenuItemBadge["default"], {
      style: TS.BADGE,
      itemBadge: itemData[item.id],
      itemConf: _itemConf,
      onClick: onClickBadge
    }) : undefined;

    Object.assign(_itemConf, rest);

    var _onClick = onClick.bind(null, _itemConf);

    return _react["default"].createElement("div", {
      tabIndex: "0",
      key: index,
      className: _className,
      onClick: _onClick,
      onKeyDown: _createOnKeyDown(_onClick)
    }, menuTitle, badgeEl);
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["styleConfig", "caption", "isInitClose"]);
  return _react["default"].createElement(_OpenClose["default"], {
    style: TS.OPEN_CLOSE,
    caption: caption,
    isClose: isInitClose,
    itemStyle: TS.ITEM
  }, _renderMenuItems(TS, restProps));
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