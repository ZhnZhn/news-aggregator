"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var CL_CAPTION = 'open-close not-selected';
var STYLE = {
  ROOT: {
    backgroundColor: '#4D4D4D',
    lineHeight: 2.5
  },
  SVG: {
    width: '16px',
    height: '16px',
    display: 'inline-block'
  },
  ROOT_CAPTION: {
    paddingLeft: '12px'
  },
  CAPTION: {
    paddingLeft: '4px',
    verticalAlign: 'top',
    color: '#9e9e9e',
    //color: '#8a8a8a',
    //color: 'rgba(164, 135, 212, 1)',
    fontFamily: 'Roboto, Arial Unicode MS, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  INLINE: {
    display: 'inline-block'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};
var FILL_OPEN = '#9e9e9e',
    FILL_CLOSE = 'transparent',
    PATH_OPEN = "M 2,14 L 14,14 14,2 2,14",
    PATH_CLOSE = "M 2,2 L 14,8 2,14 2,2";

var OpenClose =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(OpenClose, _Component);

  /*
  static propTypes = {
    isClose: PropTypes.bool,
      style: PropTypes.object,
    styleNotSelected: PropTypes.object,
    styleCaption: PropTypes.object,
      caption: PropTypes.string,
    fillOpen: PropTypes.string,
    fillClose: PropTypes.string,
      isDraggable: PropTypes.bool,
    option: PropTypes.object,
    onDragStart: PropTypes.func,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragLeave: PropTypes.func,
    onDrop: PropTypes.func,
      children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
    ])
  }
  */
  function OpenClose(props) {
    var _this;

    _this = _Component.call(this) || this;

    _this._handleToggle = function () {
      _this.setState({
        isOpen: !_this.state.isOpen
      });
    };

    _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this._handleToggle();
      }
    };

    _this.state = {
      isOpen: !props.isClose
    };
    return _this;
  }

  var _proto = OpenClose.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        itemStyle = _this$props.itemStyle,
        styleCaption = _this$props.styleCaption,
        caption = _this$props.caption,
        fillOpen = _this$props.fillOpen,
        fillClose = _this$props.fillClose,
        isDraggable = _this$props.isDraggable,
        option = _this$props.option,
        onDragStart = _this$props.onDragStart,
        onDragEnter = _this$props.onDragEnter,
        onDragOver = _this$props.onDragOver,
        onDragLeave = _this$props.onDragLeave,
        onDrop = _this$props.onDrop,
        children = _this$props.children,
        _dragOption = isDraggable ? {
      draggable: true,
      onDragStart: onDragStart.bind(null, option),
      onDrop: onDrop.bind(null, option),
      onDragEnter: onDragEnter,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave
    } : undefined;

    var _pathV, _fillV, _styleCollapse, _classShow, _itemStyle;

    if (this.state.isOpen) {
      _pathV = PATH_OPEN;
      _fillV = fillOpen;
      _styleCollapse = STYLE.BLOCK;
      _classShow = 'show-popup';
      _itemStyle = null;
    } else {
      _pathV = PATH_CLOSE;
      _fillV = fillClose;
      _styleCollapse = STYLE.NONE;
      _classShow = null;
      _itemStyle = itemStyle;
    }

    return _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, STYLE.ROOT, {}, style)
    }, _react["default"].createElement("div", (0, _extends2["default"])({
      role: "button",
      className: CL_CAPTION,
      tabIndex: "0",
      style: (0, _extends2["default"])({}, STYLE.ROOT_CAPTION, {}, _itemStyle),
      onClick: this._handleToggle,
      onKeyDown: this._handleKeyDown
    }, _dragOption), _react["default"].createElement("div", {
      style: STYLE.SVG
    }, _react["default"].createElement("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: STYLE.INLINE
    }, _react["default"].createElement("path", {
      d: _pathV,
      fill: _fillV,
      strokeWidth: "1",
      stroke: fillOpen
    }))), _react["default"].createElement("span", {
      style: (0, _extends2["default"])({}, STYLE.CAPTION, {}, styleCaption)
    }, caption)), _react["default"].createElement("div", {
      className: _classShow,
      style: _styleCollapse
    }, children));
  };

  return OpenClose;
}(_react.Component);

OpenClose.defaultProps = {
  isClose: true,
  fillOpen: FILL_OPEN,
  fillClose: FILL_CLOSE
};
var _default = OpenClose;
exports["default"] = _default;
//# sourceMappingURL=OpenClose.js.map