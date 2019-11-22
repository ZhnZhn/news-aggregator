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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../dialogs/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _CardApiKeys = require('./CardApiKeys');

var _CardApiKeys2 = _interopRequireDefault(_CardApiKeys);

var _CardUiTheme = require('./CardUiTheme');

var _CardUiTheme2 = _interopRequireDefault(_CardUiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

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
  },

  TABS: {
    marginLeft: 24,
    textAlign: 'left'
  },
  TAB_SELECTED: {
    color: 'black'
  },
  CARD_ROOT: {
    position: 'relative',
    height: 280
  },
  CARD_BUTTONS: {
    position: 'absolute',
    right: 4,
    bottom: 0,
    cursor: 'default'
  }
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
    }, _this._selectTheme = function (item) {
      var theme = _this.props.theme;

      if (item && theme.getThemeName() !== item.value) {
        theme.setThemeName(item.value);
        _ComponentActions2.default.changeTheme(item.value);
        _this.forceUpdate();
      }
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
          TS = theme.createStyle(_Dialog2.default),
          _themeName = theme.getThemeName();

      return _react2.default.createElement(
        _Comp2.default.ModalDialog,
        {
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          divBtStyle: S.DIV_BT,
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'User Settings',
          isWithButton: false,
          isShow: isShow,
          onKeyDown: this._handleKeyDown,
          onClose: onClose
        },
        _react2.default.createElement(
          _Comp2.default.TabPane,
          {
            width: '100%',
            tabsStyle: S.TABS,
            selectedStyle: S.TAB_SELECTED
          },
          _react2.default.createElement(
            _Comp2.default.Tab,
            { title: 'API Key' },
            _react2.default.createElement(_CardApiKeys2.default, {
              ref: this._refInput,
              style: S.CARD_ROOT,
              fieldStyle: TS.INPUT_ROOT,
              themeName: _themeName,
              buttonsStyle: S.CARD_BUTTONS,
              TS: TS,
              data: data,
              onClose: onClose
            })
          ),
          _react2.default.createElement(
            _Comp2.default.Tab,
            { title: 'UI Theme' },
            _react2.default.createElement(_CardUiTheme2.default, {
              style: S.CARD_ROOT,
              styleConfig: TS.SELECT,
              buttonsStyle: S.CARD_BUTTONS,
              themeName: _themeName,
              TS: TS,
              onSetTheme: this._selectTheme,
              onClose: onClose
            })
          )
        )
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map