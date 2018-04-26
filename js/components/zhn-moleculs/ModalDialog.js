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

var _class, _temp;
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
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CAPTON_DIV: {
    padding: '5px',
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px'
  },
  COMMAND_DIV: {
    cursor: 'default',
    float: 'right',
    marginTop: '16px',
    marginBottom: '10px',
    marginRight: '4px'
  }
};

var ModalDialog = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ModalDialog, _Component);

  function ModalDialog(props) {
    (0, _classCallCheck3.default)(this, ModalDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this));

    _this._handleKeyDown = function (event) {
      var focused = document.activeElement;
      if (focused == _this.rootDiv) {
        _this.props.onKeyDown(event);
      }
    };

    _this._renderCommandButton = function () {
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
          rootStyle: TS.RAISED_ROOT,
          clDiv: TS.CL_RAISED_DIV,
          caption: 'Close',
          isPrimary: isClosePrimary,
          onClick: onClose
        })
      );
    };

    _this.wasClosing = false;
    return _this;
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
      var _this3 = this;

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
          ref: function ref(n) {
            return _this3.rootDiv = n;
          },
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
}, _temp);
exports.default = ModalDialog;
//# sourceMappingURL=ModalDialog.js.map