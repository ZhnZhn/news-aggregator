"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var S = {
  BADGE: {
    display: 'inline-block',
    color: 'grey',
    //backgroundColor: 'rgb(63, 81, 181)',
    backgroundColor: '#3f5178',
    "float": 'right',
    width: '32px',
    paddingRight: '5px',
    paddingLeft: '5px',
    borderRadius: '30%',
    textAlign: 'center'
  },
  CLOSE: {
    color: 'black'
  }
};

var MenuItemBadge = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MenuItemBadge, _Component);

  function MenuItemBadge() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleClick = function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          itemConf = _this$props.itemConf,
          onClick = _this$props.onClick;
      onClick(itemConf);
    };

    return _this;
  }

  var _proto = MenuItemBadge.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        style = _this$props2.style,
        _this$props2$itemBadg = _this$props2.itemBadge,
        itemBadge = _this$props2$itemBadg === void 0 ? {} : _this$props2$itemBadg,
        isOpen = itemBadge.isOpen,
        _badgeStyle = isOpen ? S.BADGE : (0, _extends2["default"])({}, S.BADGE, S.CLOSE);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: (0, _extends2["default"])({}, _badgeStyle, style),
      onClick: this._handleClick,
      children: "V"
    });
  };

  return MenuItemBadge;
}(_react.Component);

var _default = MenuItemBadge;
exports["default"] = _default;
//# sourceMappingURL=MenuItemBadge.js.map