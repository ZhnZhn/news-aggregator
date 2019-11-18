'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Interact = require('../../utils/Interact');

var _Interact2 = _interopRequireDefault(_Interact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_DIALOG = 'dialog';
//import PropTypes from 'prop-types'

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
    float: 'right',
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

var DraggableDialog = function (_Component) {
  (0, _inherits3.default)(DraggableDialog, _Component);

  function DraggableDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DraggableDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DraggableDialog.__proto__ || Object.getPrototypeOf(DraggableDialog)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyDown = function (event) {
      var focused = document.activeElement;
      if (focused == _this.rootDiv) {
        _this.props.onKeyDown(event);
      }
    }, _this._handleClose = function (event) {
      if (_this.prevFocusedEl) {
        _this.prevFocusedEl.focus();
      }
      _this.props.onClose();
    }, _this._renderCommandButton = function (_ref2) {
      var commandButtons = _ref2.commandButtons,
          S = _ref2.styleButton,
          onShowChart = _ref2.onShowChart,
          onClose = _ref2.onClose;

      return _react2.default.createElement(
        'div',
        { style: styles.commandDiv },
        commandButtons,
        _isFn(onShowChart) && _react2.default.createElement(_RaisedButton2.default, {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: 'Show',
          onClick: onShowChart
        }),
        _react2.default.createElement(_RaisedButton2.default, {
          rootStyle: S.RAISED_ROOT,
          clDiv: S.CL_RAISED_DIV,
          caption: 'Close',
          onClick: _this._handleClose
        })
      );
    }, _this._refRootDiv = function (c) {
      return _this.rootDiv = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DraggableDialog, [{
    key: 'componentDidMount',

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

    value: function componentDidMount() {
      _Interact2.default.makeDragable(this.rootDiv);
      this.prevFocusedEl = document.activeElement;
      this.rootDiv.focus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isShow && !prevProps.isShow) {
        this.rootDiv.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
          _styleShow = isShow ? styles.BLOCK : styles.NONE,
          _classShow = isShow ? CL_DIALOG_OPEN : CL_DIALOG;

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootDiv,
          className: _classShow,
          style: (0, _extends3.default)({}, styles.rootDiv, rootStyle, _styleShow),
          tabIndex: '0',
          onKeyDown: this._handleKeyDown
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
  }, {
    key: 'focusPrevEl',
    value: function focusPrevEl() {
      if (this.prevFocusedEl) {
        this.prevFocusedEl.focus();
      }
    }
  }]);
  return DraggableDialog;
}(_react.Component);

exports.default = DraggableDialog;
//# sourceMappingURL=DraggableDialog.js.map