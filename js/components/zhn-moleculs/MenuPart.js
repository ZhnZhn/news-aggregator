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
      items = _option$items === undefined ? [] : _option$items,
      _option$hmItems = option.hmItems,
      hmItems = _option$hmItems === undefined ? {} : _option$hmItems,
      itemData = option.itemData,
      onClick = option.onClick,
      onClickBadge = option.onClickBadge,
      rest = (0, _objectWithoutProperties3.default)(option, ['items', 'hmItems', 'itemData', 'onClick', 'onClickBadge']);

  return items.map(function (item, index) {
    var _className = TS.CL_ROW ? TS.CL_ROW + ' ' + CL_NOT_S : CL_NOT_S,
        _itemConf = hmItems[item.id],
        menuTitle = _itemConf.menuTitle,
        badgeEl = itemData[item.id] ? _react2.default.createElement(_MenuItemBadge2.default, {
      style: TS.BADGE,
      itemBadge: itemData[item.id],
      itemConf: _itemConf,
      onClick: onClickBadge
    }) : undefined;


    Object.assign(_itemConf, rest);
    var _onClick = onClick.bind(null, _itemConf);
    return _react2.default.createElement(
      'div',
      {
        tabIndex: '0',
        key: index,
        className: _className,
        onClick: _onClick,
        onKeyDown: _createOnKeyDown(_onClick)
      },
      menuTitle,
      badgeEl
    );
  });
};

var MenuPart = function MenuPart(_ref) {
  var TS = _ref.styleConfig,
      caption = _ref.caption,
      isInitClose = _ref.isInitClose,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['styleConfig', 'caption', 'isInitClose']);
  return _react2.default.createElement(
    _OpenClose2.default,
    {
      style: TS.OPEN_CLOSE,
      caption: caption,
      isClose: isInitClose,
      itemStyle: TS.ITEM
    },
    _renderMenuItems(TS, restProps)
  );
};

MenuPart.propTypes = process.env.NODE_ENV !== "production" ? {
  caption: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.object),
  isInitClose: _propTypes2.default.bool
} : {};

exports.default = MenuPart;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\MenuPart.js.map