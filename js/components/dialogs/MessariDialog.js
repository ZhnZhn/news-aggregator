"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _dec, _class, _temp;

var NEWS_FOR_OPTIONS = [{
  caption: "All",
  value: "all"
}, {
  caption: "Bitcoin",
  value: "BTC"
}, {
  caption: "Ethereum",
  value: "ETH"
}, {
  caption: "Tether",
  value: "USDT"
}, {
  caption: "XRP",
  value: "XRP"
}, {
  caption: "Bitcoin-Cash",
  value: "BCH"
}, {
  caption: "Chainlink",
  value: "LINK"
}, {
  caption: "Cardano",
  value: "ADA"
}, {
  caption: "Bitcoin-SV",
  value: "BSV"
}, {
  caption: "Litecoin",
  value: "LTC"
}, {
  caption: "Binance-Coin",
  value: "BNB"
}, {
  caption: "Crypto-Com-Chain",
  value: "CRO"
}, {
  caption: "Tezos",
  value: "XTZ"
}, {
  caption: "EOS",
  value: "EOS"
}, {
  caption: "Stellar",
  value: "XLM"
}, {
  caption: "Monero",
  value: "XMR"
}, {
  caption: "Tron",
  value: "TRX"
}, {
  caption: "Unus-Sed-Leo",
  value: "LEO"
}, {
  caption: "USD-Coin",
  value: "USDC"
}, {
  caption: "Vechain",
  value: "VET"
}, {
  caption: "Cosmos",
  value: "ATOM"
}],
    DF_RECENT = NEWS_FOR_OPTIONS[0];
var MessariDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(MessariDialog, _Component);

  function MessariDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._selectNewsAbout = function (option) {
      _this.assetKey = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad;
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'MS',
        assetKey: _this.assetKey
      });

      _this._handleClose();
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = MessariDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "Messari: Blockchain News",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "News about",
        initItem: DF_RECENT,
        options: NEWS_FOR_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: this._selectNewsAbout
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
        rootStyle: TS.POWERED_BY,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Messari, {})
      })]
    });
  };

  return MessariDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(MessariDialog);

exports["default"] = _default;
//# sourceMappingURL=MessariDialog.js.map