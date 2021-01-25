"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var ItemHeader = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(ItemHeader, _Component);

  function ItemHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleClose = function (event) {
      event.stopPropagation();

      _this.props.onClose();
    };

    _this._handleKeyDown = function (event) {
      var keyCode = event.keyCode;
      var _this$props = _this.props,
          isShow = _this$props.isShow,
          onClick = _this$props.onClick,
          onClose = _this$props.onClose,
          onHide = _this$props.onHide;

      if (keyCode === 13) {
        if (!isShow) {
          onClick();
        } else {
          onHide();
        }
      } else if (keyCode === 27 && isShow) {
        onClick();
      } else if (keyCode === 8 || keyCode === 46) {
        onClose();
      }
    };

    _this._refRoot = function (node) {
      return _this.rootNode = node;
    };

    return _this;
  }

  var _proto = ItemHeader.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        className = _this$props2.className,
        style = _this$props2.style,
        captionStyle = _this$props2.captionStyle,
        btCloseStyle = _this$props2.btCloseStyle,
        title = _this$props2.title,
        onClick = _this$props2.onClick;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      role: "button",
      ref: this._refRoot,
      tabIndex: "0",
      className: className,
      style: style,
      onClick: onClick,
      onKeyDown: this._handleKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "not-selected",
        style: captionStyle,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgX["default"], {
        style: btCloseStyle,
        onClick: this._handleClose
      })]
    });
  };

  _proto.focus = function focus() {
    if (this.rootNode && this.rootNode.focus) {
      this.rootNode.focus();
    }
  };

  return ItemHeader;
}(_react.Component);

var _default = ItemHeader;
exports["default"] = _default;
//# sourceMappingURL=ItemHeader.js.map