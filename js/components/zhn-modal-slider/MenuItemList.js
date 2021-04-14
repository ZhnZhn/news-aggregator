"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));

var _jsxRuntime = require("react/jsx-runtime");

var SUB_MENU = 'sub';
var S = {
  ITEM: {
    position: 'relative'
  },
  NEXT_PAGE: {
    position: 'absolute',
    display: 'inline-block',
    top: 0,
    right: '4px',
    color: 'inherit',
    padding: '1px 16px 1px 0px',
    fontWeight: 'bold'
  }
};

var _fClick = function _fClick(_ref) {
  var isClose = _ref.isClose,
      onClick = _ref.onClick,
      onClose = _ref.onClose;
  return typeof onClick === 'function' ? isClose ? function () {
    onClick();
    onClose();
  } : onClick : void 0;
};

var NextPageArrow = function NextPageArrow(_ref2) {
  var type = _ref2.type;
  if (type !== SUB_MENU) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    style: S.NEXT_PAGE,
    children: ">"
  });
};

var MenuItemList = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MenuItemList, _Component);

  function MenuItemList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._renderItems = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          itemCl = _this$props.itemCl,
          pageNumber = _this$props.pageNumber,
          onNextPage = _this$props.onNextPage,
          onReg = _this$props.onReg,
          onClose = _this$props.onClose;
      return items.map(function (item, index) {
        var cn = item.cn,
            name = item.name,
            type = item.type,
            id = item.id,
            isClose = item.isClose,
            onClick = item.onClick,
            _onClick = type === SUB_MENU ? onNextPage.bind(null, id, name, pageNumber) : _fClick({
          isClose: isClose,
          onClick: onClick,
          onClose: onClose
        }),
            _onReg = index === 0 ? onReg : void 0;

        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem["default"], {
          className: cn || itemCl,
          style: S.ITEM,
          onClick: _onClick,
          onReg: _onReg,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: name
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(NextPageArrow, {
            type: type
          })]
        }, name);
      });
    };

    return _this;
  }

  var _proto = MenuItemList.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: this._renderItems()
    });
  };

  return MenuItemList;
}(_react.Component);

var _default = MenuItemList;
exports["default"] = _default;
//# sourceMappingURL=MenuItemList.js.map