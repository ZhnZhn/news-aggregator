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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width: '400px',
    paddingTop: '16px',
    paddingLeft: '10px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line'
  }
};

var _toMsg = function _toMsg(data) {
  if (data instanceof TypeError) {
    return data.message;
  }
  var status = data.status,
      url = data.url,
      msg = data.msg;

  if (status) {
    return url + '\ncode:' + status + '\nNetwork exception';
  } else if (msg) {
    return msg;
  }
  return 'Exception Message';
};

var AlertDialog = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(AlertDialog, _Component);

  function AlertDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AlertDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyDown = function (event) {
      if (event.keyCode === 27 || event.keyCode === 13) {
        _this.props.onClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AlertDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          data = _props.data,
          theme = _props.theme,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          _msg = _toMsg(data);

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: TS.R_DIALOG,
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'Exception',
          isShow: isShow,
          isClosePrimary: true,
          onKeyDown: this._handleKeyDown,
          onClose: onClose
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            { style: S.MSG },
            _msg
          )
        )
      );
    }
  }]);
  return AlertDialog;
}(_react.Component), _class.defaultProps = {
  data: {}
}, _temp2);
AlertDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  isShow: _react.PropTypes.bool,
  data: _react.PropTypes.shape({
    alertCaption: _react.PropTypes.string,
    alertItemId: _react.PropTypes.string,
    alertDescr: _react.PropTypes.string
  }),
  onClose: _react.PropTypes.func
} : {};
exports.default = (0, _withTheme2.default)(AlertDialog);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\AlertDialog.js.map