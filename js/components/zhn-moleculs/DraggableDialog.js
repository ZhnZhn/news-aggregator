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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Interact = require('../../utils/Interact');

var _Interact2 = _interopRequireDefault(_Interact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    float: 'right',
    marginTop: '16px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

var DraggableDialog = function (_Component) {
  (0, _inherits3.default)(DraggableDialog, _Component);

  function DraggableDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DraggableDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DraggableDialog.__proto__ || Object.getPrototypeOf(DraggableDialog)).call.apply(_ref, [this].concat(args))), _this), _this._renderCommandButton = function (_ref2) {
      var commandButtons = _ref2.commandButtons,
          S = _ref2.styleButton,
          onShowChart = _ref2.onShowChart,
          onClose = _ref2.onClose;

      return _react2.default.createElement(
        'div',
        { style: styles.commandDiv },
        commandButtons,
        typeof onShowChart === 'function' && _react2.default.createElement(_RaisedButton2.default, {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: 'Show',
          onClick: onShowChart
        }),
        _react2.default.createElement(_RaisedButton2.default, {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: 'Close',
          onClick: onClose
        })
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DraggableDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _Interact2.default.makeDragable(this.rootDivEl);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          rootStyle = _props.rootStyle,
          caption = _props.caption,
          browserCaptionStyle = _props.browserCaptionStyle,
          commandButtons = _props.commandButtons,
          styleButton = _props.styleButton,
          children = _props.children,
          onShowChart = _props.onShowChart,
          onClose = _props.onClose,
          _styleShow = isShow ? { display: 'block' } : { display: 'none' },
          _classShow = isShow ? 'show-popup' : undefined;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(c) {
            return _this2.rootDivEl = c;
          },
          className: _classShow,
          style: Object.assign({}, styles.rootDiv, rootStyle, _styleShow)
        },
        _react2.default.createElement(_BrowserCaption2.default, {
          rootStyle: browserCaptionStyle,
          caption: caption,
          onClose: onClose
        }),
        _react2.default.createElement(
          'div',
          { style: styles.childrenDiv },
          children
        ),
        this._renderCommandButton({ commandButtons: commandButtons, styleButton: styleButton, onShowChart: onShowChart, onClose: onClose })
      );
    }
  }]);
  return DraggableDialog;
}(_react.Component);

DraggableDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  isShow: _propTypes2.default.bool,
  caption: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
  commandButtons: _propTypes2.default.arrayOf(_propTypes2.default.element),
  onShowChart: _propTypes2.default.func,
  onClose: _propTypes2.default.func
} : {};
exports.default = DraggableDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-moleculs\DraggableDialog.js.map