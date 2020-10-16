"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime.js");

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _dec, _class, _temp;

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};
var SORT_BY_OPTIONS = [{
  caption: "Relevancy",
  value: "relevancy"
}, {
  caption: "Popularity",
  value: "popularity"
}, {
  caption: "PublishedAt",
  value: "publishedAt"
}],
    DF_SORT_BY = SORT_BY_OPTIONS[0],
    DF_TERM = "Weather";
var NewsApiSearchDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(NewsApiSearchDialog, _Component);

  function NewsApiSearchDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _symbol = _this.inputSymbol.getValue() || DF_TERM;

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'NS',
        symbol: _symbol,
        sortBy: _this.sortBy
      });

      _this._handleClose();
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputSymbol = function (comp) {
      return _this.inputSymbol = comp;
    };

    _this.sortBy = DF_SORT_BY.value;

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = NewsApiSearchDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT),
        _termCaption = "Term (Default: " + DF_TERM + ")";

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "NewsApi Search",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        style: TS.INPUT_ROOT,
        ref: this._refInputSymbol,
        caption: _termCaption,
        initValue: DF_TERM,
        onEnter: this._handleLoad
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "SortBy",
        initItem: DF_SORT_BY,
        options: SORT_BY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: this._selectSortBy
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
        rootStyle: S.POWERED_BY,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.NewsApi, {})
      })]
    });
  };

  return NewsApiSearchDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(NewsApiSearchDialog);

exports["default"] = _default;
//# sourceMappingURL=NewsApiSearchDialog.js.map