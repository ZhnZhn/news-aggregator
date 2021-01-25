"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _BrowserCaption = _interopRequireDefault(require("../zhn-atoms/BrowserCaption"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _Interact = _interopRequireDefault(require("../../utils/Interact"));

//import PropTypes from 'prop-types'
var CL_DIALOG = 'dialog';
var CL_DIALOG_OPEN = 'dialog show-popup';
var styles = {
  rootDiv: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  childrenDiv: {
    cursor: 'default'
  },
  commandDiv: {
    cursor: 'default',
    "float": 'right',
    marginTop: '16px',
    marginBottom: '10px',
    marginRight: '4px'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var DraggableDialog = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DraggableDialog, _Component);

  function DraggableDialog() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._handleKeyDown = function (event) {
      var focused = document.activeElement;

      if (focused == _this.rootDiv) {
        _this.props.onKeyDown(event);
      }
    };

    _this._handleClose = function (event) {
      if (_this.prevFocusedEl) {
        _this.prevFocusedEl.focus();
      }

      _this.props.onClose();
    };

    _this._renderCommandButton = function (_ref) {
      var commandButtons = _ref.commandButtons,
          S = _ref.styleButton,
          onShowChart = _ref.onShowChart,
          onClose = _ref.onClose;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: styles.commandDiv,
        children: [commandButtons, _isFn(onShowChart) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: "Show",
          onClick: onShowChart
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: "Close",
          onClick: _this._handleClose
        })]
      });
    };

    _this._refRootDiv = function (c) {
      return _this.rootDiv = c;
    };

    return _this;
  }

  var _proto = DraggableDialog.prototype;

  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.element),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
  */
  _proto.componentDidMount = function componentDidMount() {
    _Interact["default"].makeDragable(this.rootDiv);

    this.prevFocusedEl = document.activeElement;
    this.rootDiv.focus();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isShow && !prevProps.isShow) {
      this.rootDiv.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isShow = _this$props.isShow,
        rootStyle = _this$props.rootStyle,
        caption = _this$props.caption,
        browserCaptionStyle = _this$props.browserCaptionStyle,
        commandButtons = _this$props.commandButtons,
        styleButton = _this$props.styleButton,
        children = _this$props.children,
        onShowChart = _this$props.onShowChart,
        onClose = _this$props.onClose,
        _styleShow = isShow ? styles.BLOCK : styles.NONE,
        _classShow = isShow ? CL_DIALOG_OPEN : CL_DIALOG;

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      ref: this._refRootDiv,
      className: _classShow,
      style: (0, _extends2["default"])({}, styles.rootDiv, rootStyle, _styleShow),
      tabIndex: "0",
      onKeyDown: this._handleKeyDown,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BrowserCaption["default"], {
        rootStyle: browserCaptionStyle,
        caption: caption,
        onClose: onClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: styles.childrenDiv,
        children: children
      }), this._renderCommandButton({
        commandButtons: commandButtons,
        styleButton: styleButton,
        onShowChart: onShowChart,
        onClose: onClose
      })]
    });
  };

  _proto.focusPrevEl = function focusPrevEl() {
    if (this.prevFocusedEl) {
      this.prevFocusedEl.focus();
    }
  };

  return DraggableDialog;
}(_react.Component);

var _default = DraggableDialog;
exports["default"] = _default;
//# sourceMappingURL=DraggableDialog.js.map