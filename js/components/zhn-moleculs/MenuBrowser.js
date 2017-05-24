'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Browser = require('../zhn-atoms/Browser');

var _Browser2 = _interopRequireDefault(_Browser);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _MenuPart = require('./MenuPart');

var _MenuPart2 = _interopRequireDefault(_MenuPart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BROWSER: {
    paddingRight: '0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  ROOT_MENU: {
    paddingLeft: '4px'
  }
};

var MenuBrowser = function (_Component) {
  (0, _inherits3.default)(MenuBrowser, _Component);

  function MenuBrowser() {
    (0, _classCallCheck3.default)(this, MenuBrowser);
    return (0, _possibleConstructorReturn3.default)(this, (MenuBrowser.__proto__ || Object.getPrototypeOf(MenuBrowser)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuBrowser, [{
    key: '_renderMenuParts',
    value: function _renderMenuParts(_ref) {
      var menuModel = _ref.menuModel,
          rowClass = _ref.rowClass,
          onClick = _ref.onClick;
      var _menuModel$menu = menuModel.menu,
          menu = _menuModel$menu === undefined ? [] : _menuModel$menu,
          _menuModel$items = menuModel.items,
          items = _menuModel$items === undefined ? {} : _menuModel$items;

      return menu.map(function (menuPart, index) {
        return _react2.default.createElement(_MenuPart2.default, (0, _extends3.default)({}, menuPart, {
          key: index,
          rowClass: rowClass,
          hmItems: items,
          onClick: onClick
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['caption']);

      return _react2.default.createElement(
        _Browser2.default,
        { isShow: true, style: S.BROWSER },
        _react2.default.createElement(_BrowserCaption2.default, {
          caption: caption
        }),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: S.SCROLL_PANE },
          this._renderMenuParts(restProps)
        )
      );
    }
  }]);
  return MenuBrowser;
}(_react.Component);

exports.default = MenuBrowser;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\MenuBrowser.js.map