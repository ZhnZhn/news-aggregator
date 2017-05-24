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

var _InputSecret = require('../zhn-atoms/InputSecret');

var _InputSecret2 = _interopRequireDefault(_InputSecret);

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  MODAL: {
    position: 'static',
    width: '370px',
    height: '140px',
    margin: '70px auto 0px'
  }
};
//import RowCheckBox from '../dialogs/RowCheckBox';

var SET_NEWS_KEY = 'setNewsKey';
//const MODE_ADMIN = 'isAdminMode';
//const MODE_DELTA = 'isDrawDeltaExtrems';
//const MODE_ZOOM = 'isNotZoomToMinMax';

var SettingsDialog = function (_Component) {
  (0, _inherits3.default)(SettingsDialog, _Component);

  function SettingsDialog(props) {
    (0, _classCallCheck3.default)(this, SettingsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SettingsDialog.__proto__ || Object.getPrototypeOf(SettingsDialog)).call(this));

    _this._handleSet = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose,
          setNewsKey = (0, _safeFn2.default)(data, SET_NEWS_KEY);

      setNewsKey(_this.inputComp.getValue());
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

    /*
    _handleMode = (fnName, mode) => {
      const { data } = this.props
          , fnMode = safeFn(data, fnName);
      fnMode(mode)
    }
    */

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          onClose = _props.onClose;
      //, _isAdminMode = safeFn(data, MODE_ADMIN, false)()
      //, _isDrawDeltaExtrems = safeFn(data, MODE_DELTA, false)()
      //, _isNotZoomToMinMax = safeFn(data, MODE_ZOOM, false)();

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          style: S.MODAL,
          caption: 'User Settings',
          isShow: isShow,
          commandButtons: this.commandButtons,
          onClose: onClose
        },
        _react2.default.createElement(
          'label',
          { style: _DialogStyles2.default.rowDiv },
          _react2.default.createElement(
            'span',
            { style: _DialogStyles2.default.labelSpan },
            'NewsKey:'
          ),
          _react2.default.createElement(_InputSecret2.default, {
            ref: function ref(c) {
              return _this2.inputComp = c;
            },
            placeholder: 'News API Key'
          })
        )
      );
    }
  }]);
  return SettingsDialog;
}(_react.Component);

SettingsDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  isShow: _react.PropTypes.bool,
  data: _react.PropTypes.shape({
    setQuandlKey: _react.PropTypes.func,
    isAdminMode: _react.PropTypes.func,
    isDrawDeltaExtrems: _react.PropTypes.func
  }),
  onClose: _react.PropTypes.func
} : {};
exports.default = SettingsDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\SettingsDialog.js.map