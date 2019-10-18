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

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: 320,
    height: 370,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  }
};
//import PropTypes from 'prop-types'

var SET_IEX_KEY = 'setIexKey';
var SET_NEWS_KEY = 'setNewsKey';
var SET_WEBHOSE_KEY = 'setWebhoseKey';

var DF_THEME = { caption: "Dark", value: "GREY" };
var _themeOptions = [{ caption: "Dark", value: "GREY" }, { caption: "Light", value: "WHITE" }, { caption: "Sand", value: "SAND" }];

var STR_EMPTY = '';
var _onTestLengthOrEmpty = function _onTestLengthOrEmpty(length) {
  return function (str) {
    if (str.length === length || str === STR_EMPTY) {
      return true;
    } else {
      return false;
    }
  };
};

var _onTestIexApi = _onTestLengthOrEmpty(35);
var _onTestNewsApi = _onTestLengthOrEmpty(32);
var _onTestWebhose = _onTestLengthOrEmpty(36);

var _getKeySetters = function _getKeySetters(data) {
  return {
    setIexKey: (0, _safeFn2.default)(data, SET_IEX_KEY),
    setNewsKey: (0, _safeFn2.default)(data, SET_NEWS_KEY),
    setWebhoseKey: (0, _safeFn2.default)(data, SET_WEBHOSE_KEY)
  };
};

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SettingsDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call.apply(_ref, [this].concat(args))), _this), _this._handleKeyDown = function (event) {
      if (event.keyCode === 13 || event.keyCode === 27) {
        _this.props.onClose();
      }
    }, _this._handleSet = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose,
          _getKeySetters2 = _getKeySetters(data),
          setIexKey = _getKeySetters2.setIexKey,
          setNewsKey = _getKeySetters2.setNewsKey,
          setWebhoseKey = _getKeySetters2.setWebhoseKey;

      setIexKey(_this.inputIex.getValue());
      setNewsKey(_this.inputNews.getValue());
      setWebhoseKey(_this.inputWebhose.getValue());
      onClose();
    }, _this._selectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        theme.setThemeName(item.value);
        _ComponentActions2.default.changeTheme(item.value);
        _this.forceUpdate();
      }
    }, _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_Comp2.default.RaisedButton, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Set All & Close',
        onClick: _this._handleSet
      })];
    }, _this._refInputIex = function (comp) {
      return _this.inputIex = comp;
    }, _this._refInputNews = function (comp) {
      return _this.inputNews = comp;
    }, _this._refInputWebhose = function (comp) {
      return _this.inputWebhose = comp;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SettingsDialog, [{
    key: 'shouldComponentUpdate',

    /*
    static propTypes = {
      isShow: PropTypes.bool,
      data: PropTypes.shape({
        setNewsKey: PropTypes.func,
        setWebhoseKey: PropTypes.func,
      }),
      onClose: PropTypes.func
    }
    */

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
          data = _props.data,
          onClose = _props.onClose,
          _getKeySetters3 = _getKeySetters(data),
          setIexKey = _getKeySetters3.setIexKey,
          setNewsKey = _getKeySetters3.setNewsKey,
          setWebhoseKey = _getKeySetters3.setWebhoseKey,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _Comp2.default.ModalDialog,
        {
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          divBtStyle: S.DIV_BT,
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'User Settings',
          isShow: isShow,
          isClosePrimary: true,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDown,
          onClose: onClose
        },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_Comp2.default.SecretField, {
            rootStyle: TS.INPUT_ROOT,
            ref: this._refInputIex,
            caption: 'IEX Cloud API Key (35 Symbols)',
            maxLength: 35,
            errorMsg: '35 symbols must be',
            onTest: _onTestIexApi,
            onEnter: setIexKey
          })
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_Comp2.default.SecretField, {
            rootStyle: TS.INPUT_ROOT,
            ref: this._refInputNews,
            caption: 'NewsApi API Key (32 Symbols)',
            maxLength: 32,
            errorMsg: '32 symbols must be',
            onTest: _onTestNewsApi,
            onEnter: setNewsKey
          })
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_Comp2.default.SecretField, {
            rootStyle: TS.INPUT_ROOT,
            ref: this._refInputWebhose,
            caption: 'Webhose API Key (36 Symbols)',
            maxLength: 36,
            errorMsg: '36 symbols must be',
            onTest: _onTestWebhose,
            onEnter: setWebhoseKey
          })
        ),
        _react2.default.createElement(_Comp2.default.InputSelect, {
          styleConfig: TS.SELECT,
          caption: 'Theme (Default: Dark)',
          initItem: DF_THEME,
          options: _themeOptions,
          onSelect: this._selectTheme
        })
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map