'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _SvgClose = require('../zhn-atoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemHeader = function (_Component) {
  (0, _inherits3.default)(ItemHeader, _Component);

  function ItemHeader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ItemHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ItemHeader.__proto__ || Object.getPrototypeOf(ItemHeader)).call.apply(_ref, [this].concat(args))), _this), _this._handleClose = function (event) {
      event.stopPropagation();
      _this.props.onClose();
    }, _this._handleKeyDown = function (event) {
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
          //window.open(url, '_blank')
        }
      } else if (keyCode === 27 && isShow) {
        onClick();
      } else if (keyCode === 8) {
        onClose();
      }
    }, _this._refRoot = function (node) {
      return _this.rootNode = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ItemHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          captionStyle = _props.captionStyle,
          svgCloseStyle = _props.svgCloseStyle,
          title = _props.title,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRoot,
          tabIndex: '0',
          className: className,
          style: style,
          onClick: onClick,
          onKeyDown: this._handleKeyDown
        },
        _react2.default.createElement(
          'span',
          {
            className: 'not-selected',
            style: captionStyle
          },
          title
        ),
        _react2.default.createElement(_SvgClose2.default, {
          style: svgCloseStyle,
          onClose: this._handleClose
        })
      );
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.rootNode && this.rootNode.focus) {
        this.rootNode.focus();
      }
    }
  }]);
  return ItemHeader;
}(_react.Component);

exports.default = ItemHeader;
//# sourceMappingURL=ItemHeader.js.map