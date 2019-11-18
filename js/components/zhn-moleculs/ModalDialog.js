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

var _class, _temp2;
//import PropTypes from 'prop-types'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  SHOWING: 'dialog show-popup',
  HIDING: 'hide-popup'
};

var STYLE = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  },
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CAPTON_DIV: {
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    padding: 5,
    textAlign: 'center',
    fontSize: '18px'
  },
  COMMAND_DIV: {
    float: 'right',
    marginTop: 16,
    marginBottom: 10,
    marginRight: 4,
    cursor: 'default'
  }
};

var ModalDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call.apply(_ref, [this].concat(args))), _this), _this.wasClosing = false, _this._handleKeyDown = function (event) {
      var focused = document.activeElement;
      if (focused == _this.rootDiv) {
        _this.props.onKeyDown(event);
      }
    }, _this._renderCommandButton = function () {
      var _this$props = _this.props,
          divBtStyle = _this$props.divBtStyle,
          commandButtons = _this$props.commandButtons,
          TS = _this$props.styleButton,
          withoutClose = _this$props.withoutClose,
          _this$props$isClosePr = _this$props.isClosePrimary,
          isClosePrimary = _this$props$isClosePr === undefined ? false : _this$props$isClosePr,
          onClose = _this$props.onClose;

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, STYLE.COMMAND_DIV, divBtStyle) },
        commandButtons,
        !withoutClose && _react2.default.createElement(_RaisedButton2.default, {
          key: '_close',
          rootStyle: TS.RAISED_ROOT,
          clDiv: TS.CL_RAISED_DIV,
          caption: 'Close',
          isPrimary: isClosePrimary,
          onClick: onClose
        })
      );
    }, _this._refRootDiv = function (n) {
      return _this.rootDiv = n;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
   static propTypes = {
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     caption: PropTypes.string,
     style: PropTypes.object,
     onClose: PropTypes.func
   }
   */


  (0, _createClass3.default)(ModalDialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prevFocusedEl = document.activeElement;
      this.rootDiv.focus();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props) {
        if (nextProps.isNotUpdate) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.wasClosing) {
        setTimeout(function () {
          _this2.setState({});
        }, this.props.timeout);
        if (this.prevFocusedEl) {
          this.prevFocusedEl.focus();
        }
      }
      if (this.props.isShow && !prevProps.isShow) {
        this.rootDiv.focus();
      }
    }
  }, {
    key: '_handleClickDialog',
    value: function _handleClickDialog(event) {
      event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          isWithButton = _props.isWithButton,
          style = _props.style,
          caption = _props.caption,
          styleCaption = _props.styleCaption,
          children = _props.children,
          onClose = _props.onClose;


      var _className = void 0,
          _style = void 0;

      if (this.wasClosing) {
        _style = STYLE.HIDE;
        this.wasClosing = false;
      } else {
        _className = isShow ? CL.SHOWING : CL.HIDING;
        _style = isShow ? STYLE.SHOW : STYLE.HIDE_POPUP;
        if (!isShow) {
          this.wasClosing = true;
        }
      }

      return _react2.default.createElement(
        'div',
        {
          ref: this._refRootDiv,
          tabIndex: '0',
          className: _className,
          style: (0, _extends3.default)({}, STYLE.ROOT_DIV, style, _style),
          onClick: this._handleClickDialog,
          onKeyDown: this._handleKeyDown
        },
        _react2.default.createElement(_BrowserCaption2.default, {
          rootStyle: styleCaption,
          caption: caption,
          onClose: onClose
        }),
        _react2.default.createElement(
          'div',
          null,
          children
        ),
        isWithButton && this._renderCommandButton()
      );
    }
  }]);
  return ModalDialog;
}(_react.Component), _class.defaultProps = {
  isWithButton: true,
  isNotUpdate: false,
  timeout: 450,
  styleButton: {
    RAISED_ROOT: undefined,
    CL_RAISED_DIV: undefined
  }
}, _temp2);
exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map