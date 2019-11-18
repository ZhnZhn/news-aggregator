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

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _Decors = require('./decorators/Decors');

var _Decors2 = _interopRequireDefault(_Decors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

var SITE_TYPE_OPTIONS = [{ caption: 'News', value: 'news' }, { caption: 'Blogs', value: 'blogs' }],
    DF_SITE_TYPE = SITE_TYPE_OPTIONS[0];

var _onTestDaysBefore = function _onTestDaysBefore(value) {
  var _n = parseInt(value, 10);
  if (!Number.isNaN(_n) && _n > 0 && _n < 31 || value === '') {
    return true;
  } else {
    return false;
  }
};

var WebhoseQueryDialog = (_dec = _Decors2.default.withDecors, _dec(_class = function (_Component) {
  (0, _inherits3.default)(WebhoseQueryDialog, _Component);

  function WebhoseQueryDialog(props) {
    (0, _classCallCheck3.default)(this, WebhoseQueryDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WebhoseQueryDialog.__proto__ || Object.getPrototypeOf(WebhoseQueryDialog)).call(this, props));

    _this._selectSiteType = function (option) {
      _this.siteType = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          _this$props$itemConf = _this$props.itemConf,
          itemConf = _this$props$itemConf === undefined ? {} : _this$props$itemConf,
          onLoad = _this$props.onLoad,
          requestType = itemConf.requestType,
          loadId = itemConf.loadId,
          _inTitle = _this.inputTitle.getValue(),
          _beforeDays = _this.inputBeforeDays.getValue();

      onLoad({
        type: type,
        source: source,
        requestType: requestType,
        itemConf: itemConf,
        loadId: loadId,
        inTitle: _inTitle,
        siteType: _this.siteType,
        beforeDays: _beforeDays
      });
    };

    _this._refDialoComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputTitle = function (comp) {
      return _this.inputTitle = comp;
    };

    _this._refInputBeforeDays = function (comp) {
      return _this.inputBeforeDays = comp;
    };

    _this.siteType = void 0;
    _this._initWithDecors(_this);
    return _this;
  }

  (0, _createClass3.default)(WebhoseQueryDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          onShow = _props.onShow,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _Comp2.default.DraggableDialog,
        {
          ref: this._refDialoComp,
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'Webhose: News, Blogs',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputTitle,
          caption: 'In Title (Default: Weather)',
          initValue: 'Weather'
        }),
        _react2.default.createElement(_Comp2.default.InputSelect, {
          caption: 'Site Type',
          initItem: DF_SITE_TYPE,
          options: SITE_TYPE_OPTIONS,
          styleConfig: TS.SELECT,
          onSelect: this._selectSiteType
        }),
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputBeforeDays,
          caption: 'Before Days (Default: 2, Max 30)',
          initValue: 2,
          errorMsg: '0<n<31 value must be',
          onTest: _onTestDaysBefore
        }),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.WebhoseIo, null)
        )
      );
    }
  }]);
  return WebhoseQueryDialog;
}(_react.Component)) || _class);
exports.default = (0, _withTheme2.default)(WebhoseQueryDialog);
//# sourceMappingURL=WebhoseQueryDialog.js.map