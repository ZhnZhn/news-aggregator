"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var MenuItem = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MenuItem, _Component);

  function MenuItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13) {
        _this.props.onClick();
      } else if (keyCode === 27) {
        _this.props.onClose({
          target: _this.divNode
        });
      }
    };

    _this._refDivNode = function (node) {
      return _this.divNode = node;
    };

    return _this;
  }

  var _proto = MenuItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        caption = _this$props.caption,
        onClick = _this$props.onClick;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      ref: this._refDivNode,
      role: "menuitem",
      className: className,
      tabIndex: "0",
      onClick: onClick,
      onKeyDown: this._hKeyDown,
      children: caption
    });
  };

  _proto.focus = function focus() {
    if (this.divNode) {
      this.divNode.focus();
    }
  };

  return MenuItem;
}(_react.Component);

MenuItem.defaultProps = {
  onClick: function onClick() {},
  onClose: function onClose() {}
};
var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=MenuItem.js.map