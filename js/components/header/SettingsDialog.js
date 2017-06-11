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

var _safeFn = require('../../utils/safeFn');

var _safeFn2 = _interopRequireDefault(_safeFn);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _RowInputSecret = require('../dialogs/RowInputSecret');

var _RowInputSecret2 = _interopRequireDefault(_RowInputSecret);

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: '380px',
    height: '160px',
    margin: '70px auto 0px'
  }
};

var SET_NEWS_KEY = 'setNewsKey';
var SET_WEBHOSE_KEY = 'setWebhoseKey';

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this));

    _this._regInput = function (propName, inputComp) {
      _this[propName] = inputComp;
    };

    _this._handleSet = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose,
          setNewsKey = (0, _safeFn2.default)(data, SET_NEWS_KEY),
          setWebhoseKey = (0, _safeFn2.default)(data, SET_WEBHOSE_KEY);

      setNewsKey(_this.inputComp.getValue());
      setWebhoseKey(_this.inputWebhose.getValue());
      onClose();
    };

    _this.commandButtons = [_react2.default.createElement(_ActionButton2.default, {
      type: 'TypeC',
      caption: 'Set',
      onClick: _this._handleSet
    })];
    return _this;
  }

  (0, _createClass3.default)(SettingsDialog, [{
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
          onClose = _props.onClose;


      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: S.MODAL,
          caption: 'User Settings',
          isShow: isShow,
          commandButtons: this.commandButtons,
          onClose: onClose
        },
        _react2.default.createElement(_RowInputSecret2.default, {
          accessKey: 'n',
          caption: 'News:',
          placeholder: 'News API Key, 32 Symbols',
          onReg: this._regInput.bind(null, 'inputComp')
        }),
        _react2.default.createElement(_RowInputSecret2.default, {
          accessKey: 'w',
          caption: 'Webhose:',
          placeholder: 'Webhose API Key, 36 Symbols',
          maxLength: '36',
          onReg: this._regInput.bind(null, 'inputWebhose')
        })
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

SettingsDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  isShow: _react.PropTypes.bool,
  data: _react.PropTypes.shape({
    setNewsKey: _react.PropTypes.func,
    setWebhoseKey: _react.PropTypes.func
  }),
  onClose: _react.PropTypes.func
} : {};
exports.default = SettingsDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\SettingsDialog.js.map