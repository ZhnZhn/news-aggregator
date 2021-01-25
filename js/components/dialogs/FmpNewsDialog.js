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

var DF_SYMBOL = "AAPL";
var FmpNewsDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(FmpNewsDialog, _Component);

  function FmpNewsDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _symbol = _this.inputSymbol.getValue();

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'FMP',
        symbol: _symbol
      });

      _this._handleClose();
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputSymbol = function (comp) {
      return _this.inputSymbol = comp;
    };

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = FmpNewsDialog.prototype;

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
      caption: "FMP: Stock News",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        ref: this._refInputSymbol,
        style: TS.INPUT_ROOT,
        maxLength: "10",
        caption: "Stock Symbol",
        initValue: DF_SYMBOL,
        autoCapitalize: "on",
        onEnter: this._handleLoad
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
        rootStyle: TS.POWERED_BY,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.FmpApi, {})
      })]
    });
  };

  return FmpNewsDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(FmpNewsDialog);

exports["default"] = _default;
//# sourceMappingURL=FmpNewsDialog.js.map