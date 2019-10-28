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

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: 320,
    height: 180,
    margin: '70px auto 0px'
  },
  DIV_BT: {
    marginTop: 26,
    marginBottom: 4
  }
};

var ApiKeyDialog = function (_Component) {
  (0, _inherits3.default)(ApiKeyDialog, _Component);

  function ApiKeyDialog() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ApiKeyDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ApiKeyDialog.__proto__ || Object.getPrototypeOf(ApiKeyDialog)).call.apply(_ref, [this].concat(args))), _this), _this._hKeyDown = function (event) {
      var keyCode = event.keyCode;

      if (keyCode === 13 || keyCode === 27) {
        _this.props.onClose();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ApiKeyDialog, [{
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
          data = _props.data,
          onClose = _props.onClose,
          TS = theme.createStyle(_Dialog2.default);

      return _react2.default.createElement(
        _Comp2.default.ModalDialog,
        {
          style: (0, _extends3.default)({}, S.MODAL, TS.R_DIALOG),
          divBtStyle: S.DIV_BT,
          styleCaption: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'API Key Required',
          isShow: isShow,
          isClosePrimary: true
          //commandButtons={_commandButtons}
          , onKeyDown: this._hKeyDown,
          onClose: onClose
        },
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(_Comp2.default.SecretField, {
            rootStyle: TS.INPUT_ROOT
            //ref={this._refInputIex}
            , caption: 'API Key (35 Symbols)',
            maxLength: 35,
            errorMsg: '35 symbols must be'
            //onTest={_onTestIexApi}
            //onEnter={setIexKey}
          })
        )
      );
    }
  }]);
  return ApiKeyDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(ApiKeyDialog);
//# sourceMappingURL=ApiKeyDialog.js.map