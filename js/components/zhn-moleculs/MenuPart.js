'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OpenClose = require('../zhn-atoms/OpenClose');

var _OpenClose2 = _interopRequireDefault(_OpenClose);

var _MenuItemBadge = require('./MenuItemBadge');

var _MenuItemBadge2 = _interopRequireDefault(_MenuItemBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderMenuItems = function _renderMenuItems(option) {
  var rowClass = option.rowClass,
      _option$items = option.items,
      items = _option$items === undefined ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === undefined ? {} : _option$hmItems,
      itemData = option.itemData,
      onClick = option.onClick,
      onClickBadge = option.onClickBadge,
      rest = (0, _objectWithoutProperties3.default)(option, ['rowClass', 'items', 'hmItems', 'itemData', 'onClick', 'onClickBadge']);

  return items.map(function (item, index) {
    var _className = rowClass ? rowClass + ' not-selected' : index % 2 ? 'row__topic__even not-selected' : 'row__topic__odd not-selected',
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle,
        badgeEl = itemData[item.id] ? _react2.default.createElement(_MenuItemBadge2.default, {
      itemBadge: itemData[item.id],
      itemConf: _itemConf,
      onClick: onClickBadge
    }) : undefined;


    Object.assign(_itemConf, rest);

    return _react2.default.createElement(
      'div',
      {
        key: index,
        className: _className,
        onClick: onClick.bind(null, _itemConf)
      },
      menuTitle,
      badgeEl
    );
  });
};

var MenuPart = function MenuPart(_ref) {
  var caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['caption', 'isInitClose']);
  return _react2.default.createElement(
    _OpenClose2.default,
    {
      caption: caption,
      isClose: isInitClose,
      styleNotSelected: { borderBottom: "1px solid #9e9e9e" }
    },
    _renderMenuItems(restProps)
  );
};

MenuPart.propTypes = process.env.NODE_ENV !== "production" ? {
  caption: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  isInitClose: _propTypes2.default.bool
} : {};

exports.default = MenuPart;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\MenuPart.js.map