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

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _PoweredBy = require('../links/PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Links = require('../links/Links');

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
};

var options = [{ caption: 'news', value: 'news' }, { caption: 'blogs', value: 'blogs' }];

var WebhoseQueryDialog = function (_Component) {
  (0, _inherits3.default)(WebhoseQueryDialog, _Component);

  function WebhoseQueryDialog(props) {
    (0, _classCallCheck3.default)(this, WebhoseQueryDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WebhoseQueryDialog.__proto__ || Object.getPrototypeOf(WebhoseQueryDialog)).call(this));

    _this._regInput = function (propName, inputComp) {
      _this[propName] = inputComp;
    };

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

    _this.siteType = undefined;
    _this.commandButtons = [_react2.default.createElement(_ActionButton2.default, {
      type: 'TypeC',
      caption: 'Load',
      onClick: _this._handleLoad
    })];
    return _this;
  }

  (0, _createClass3.default)(WebhoseQueryDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          onShow = _props.onShow;

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          caption: 'Webhose.io Query',
          isShow: isShow,
          commandButtons: this.commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_RowInputText2.default, {
          accessKey: 't',
          caption: 'In Title:',
          placeholder: 'Default: Weather',
          spellCheck: true,
          autoCorrect: 'on',
          autoComplete: 'on',
          onReg: this._regInput.bind(null, 'inputTitle')
        }),
        _react2.default.createElement(_RowInputSelect2.default, {
          accessKey: 's',
          caption: 'SiteType:',
          placeholder: 'Default: News',
          options: options,
          onSelect: this._selectSiteType
        }),
        _react2.default.createElement(_RowInputText2.default, {
          accessKey: 'b',
          caption: 'Before Days:',
          placeholder: 'Default: 2, Number, Max 30',
          onReg: this._regInput.bind(null, 'inputBeforeDays')
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

exports.default = WebhoseQueryDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\WebhoseQueryDialog.js.map