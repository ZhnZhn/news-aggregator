"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _dec, _class, _temp;

var SITE_TYPE_OPTIONS = [{
  caption: 'News',
  value: 'news'
}, {
  caption: 'Blogs',
  value: 'blogs'
}],
    DF_SITE_TYPE = SITE_TYPE_OPTIONS[0];

var _onTestDaysBefore = function _onTestDaysBefore(value) {
  var _n = parseInt(value, 10);

  if (!Number.isNaN(_n) && _n > 0 && _n < 31 || value === '') {
    return true;
  } else {
    return false;
  }
};

var WebhoseQueryDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(WebhoseQueryDialog, _Component);

  function WebhoseQueryDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._selectSiteType = function (option) {
      _this.siteType = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          _this$props$itemConf = _this$props.itemConf,
          itemConf = _this$props$itemConf === void 0 ? {} : _this$props$itemConf,
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

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = WebhoseQueryDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return _react["default"].createElement(_Comp["default"].DraggableDialog, {
      ref: this._refDialoComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "Webhose: News, Blogs",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose
    }, _react["default"].createElement(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: this._refInputTitle,
      caption: "In Title (Default: Weather)",
      initValue: "Weather"
    }), _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "Site Type",
      initItem: DF_SITE_TYPE,
      options: SITE_TYPE_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectSiteType
    }), _react["default"].createElement(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: this._refInputBeforeDays,
      caption: "Before Days, Max 30",
      initValue: 2,
      errorMsg: "0<n<31 value must be",
      onTest: _onTestDaysBefore
    }), _react["default"].createElement(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY
    }, _react["default"].createElement(_Comp["default"].Link.WebhoseIo, null)));
  };

  return WebhoseQueryDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(WebhoseQueryDialog);

exports["default"] = _default;
//# sourceMappingURL=WebhoseQueryDialog.js.map