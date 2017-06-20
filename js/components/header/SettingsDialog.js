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

var _safeFn = require('../../utils/safeFn');

var _safeFn2 = _interopRequireDefault(_safeFn);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../dialogs/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalDialog = require('../zhn-moleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _RowInputSecret = require('../dialogs/RowInputSecret');

var _RowInputSecret2 = _interopRequireDefault(_RowInputSecret);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: '380px',
    height: '180px',
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

    _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Set',
        onClick: _this._handleSet
      })];
    };

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
          theme = _props.theme,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'User Settings',
          isShow: isShow,
          commandButtons: _commandButtons,
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
exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\SettingsDialog.js.map