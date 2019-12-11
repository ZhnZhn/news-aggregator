"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var S = {
  LI: {
    display: 'inline-block',
    color: '#9e9e9e',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    fontWeight: 'bold',
    borderBottom: '3px solid #9e9e9e',
    cursor: 'pointer'
  },
  SELECTED: {
    color: '#434348',
    borderBottom: '3px solid #2f7ed8'
  }
};

var Tab =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        isSelected = _this$props.isSelected,
        selectedStyle = _this$props.selectedStyle,
        onClick = _this$props.onClick;

    var _selectedStyle = isSelected ? (0, _extends2["default"])({}, S.SELECTED, {}, selectedStyle) : null;

    return _react["default"].createElement("li", {
      style: (0, _extends2["default"])({}, S.LI, {}, _selectedStyle),
      onClick: onClick
    }, _react["default"].createElement("span", null, title));
  };

  return Tab;
}(_react.Component);

var _default = Tab;
exports["default"] = _default;
//# sourceMappingURL=Tab.js.map