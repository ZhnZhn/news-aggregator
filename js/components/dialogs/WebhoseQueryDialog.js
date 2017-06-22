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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _TextField = require('../zhn-m-input/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _PoweredBy = require('../links/PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Links = require('../links/Links');

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
};

var DF_SITY_TYPE = {
  caption: 'News', value: 'news'
};

var options = [{ caption: 'News', value: 'news' }, { caption: 'Blogs', value: 'blogs' }];

var _onTestDaysBefore = function _onTestDaysBefore(value) {
  var _n = parseInt(value, 10);
  if (!Number.isNaN(_n) && _n > 0 && _n < 31 || value === '') {
    return true;
  } else {
    return false;
  }
};

var WebhoseQueryDialog = function (_Component) {
  (0, _inherits3.default)(WebhoseQueryDialog, _Component);

  function WebhoseQueryDialog(props) {
    (0, _classCallCheck3.default)(this, WebhoseQueryDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WebhoseQueryDialog.__proto__ || Object.getPrototypeOf(WebhoseQueryDialog)).call(this));

    _this._selectSiteType = function (option) {
      _this.siteType = option ? option.value : undefined;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _inTitle = _this.inputTitle.getValue(),
          _beforeDays = _this.inputBeforeDays.getValue();

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'W',
        inTitle: _inTitle,
        siteType: _this.siteType,
        beforeDays: _beforeDays
      });
    };

    _this._handleClose = function () {
      _this.props.onClose();
    };

    _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Load',
        isPrimary: true,
        onClick: _this._handleLoad
      })];
    };

    _this.siteType = undefined;
    return _this;
  }

  (0, _createClass3.default)(WebhoseQueryDialog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          onShow = _props.onShow,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'Webhose.io Query',
          isShow: isShow,
          commandButtons: _commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_TextField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: function ref(comp) {
            return _this2.inputTitle = comp;
          },
          caption: 'In Title (Default: Weather)',
          initValue: 'Weather'
        }),
        _react2.default.createElement(_InputSelect2.default, {
          caption: 'Site Type',
          initItem: DF_SITY_TYPE,
          options: options,
          styleConfig: TS.SELECT,
          onSelect: this._selectSiteType
        }),
        _react2.default.createElement(_TextField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: function ref(comp) {
            return _this2.inputBeforeDays = comp;
          },
          caption: 'Before Days (Default: 2, Max 30)',
          initValue: 2,
          errorMsg: '0<n<31 value must be',
          onTest: _onTestDaysBefore
        }),
        _react2.default.createElement(
          _PoweredBy2.default,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Links.LinkWebhoseIo, null)
        )
      );
    }
  }]);
  return WebhoseQueryDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(WebhoseQueryDialog);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\WebhoseQueryDialog.js.map