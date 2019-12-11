"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Browser = _interopRequireDefault(require("../zhn-atoms/Browser"));

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));

var _MenuPart = _interopRequireDefault(require("./MenuPart"));

var S = {
  BROWSER: {
    paddingRight: '0px'
  },
  SCROLL_PANE: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px' //paddingLeft: '4px'

  },
  ROOT_MENU: {
    paddingLeft: '4px'
  }
};

var MenuBrowser =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(MenuBrowser, _Component);

  function MenuBrowser() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MenuBrowser.prototype;

  _proto._renderMenuParts = function _renderMenuParts(_ref) {
    var menuModel = _ref.menuModel,
        rowClass = _ref.rowClass,
        onClick = _ref.onClick;
    var _menuModel$menu = menuModel.menu,
        menu = _menuModel$menu === void 0 ? [] : _menuModel$menu,
        _menuModel$items = menuModel.items,
        items = _menuModel$items === void 0 ? {} : _menuModel$items;
    return menu.map(function (menuPart, index) {
      return _react["default"].createElement(_MenuPart["default"], (0, _extends2["default"])({}, menuPart, {
        key: index,
        rowClass: rowClass,
        hmItems: items,
        onClick: onClick
      }));
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["caption"]);
    return _react["default"].createElement(_Browser["default"], {
      isShow: true,
      style: S.BROWSER
    }, _react["default"].createElement(_BrowserCaption["default"], {
      caption: caption
    }), _react["default"].createElement(_ScrollPane["default"], {
      style: S.SCROLL_PANE
    }, this._renderMenuParts(restProps)));
  };

  return MenuBrowser;
}(_react.Component);

var _default = MenuBrowser;
exports["default"] = _default;
//# sourceMappingURL=MenuBrowser.js.map