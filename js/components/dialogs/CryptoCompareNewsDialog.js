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

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

var FEED_OPTIONS = [{
  caption: 'All',
  value: 'ALL_NEWS_FEEDS'
}, {
  caption: 'Decrypt',
  value: 'decrypt'
}, {
  caption: 'CoinDesk',
  value: 'coindesk'
}, {
  caption: 'CoinTelegraph',
  value: 'cointelegraph'
}, {
  caption: 'CryptoCompare',
  value: 'cryptocompare'
}],
    DF_FEED = FEED_OPTIONS[0],
    CATEGORY_OPTIONS = [{
  caption: 'All',
  value: 'ALL_NEWS_CATEGORIES'
}, {
  caption: 'Altcoin',
  value: 'Altcoin'
}, {
  caption: 'Asia',
  value: 'Asia'
}, {
  caption: 'Blockchain',
  value: 'Blockchain'
}, {
  caption: 'Business',
  value: 'Business'
}, {
  caption: 'Commodity',
  value: 'Commodity'
}, {
  caption: 'Exchange',
  value: 'Exchange'
}, {
  caption: 'Fiat',
  value: 'Fiat'
}, {
  caption: 'ICO',
  value: 'ICO'
}, {
  caption: 'Market',
  value: 'Market'
}, {
  caption: 'Mining',
  value: 'Mining'
}, {
  caption: 'Regulation',
  value: 'Regulation'
}, {
  caption: 'Trading',
  value: 'Trading'
}, {
  caption: 'Technology',
  value: 'Technology'
}, {
  caption: 'Sponsored',
  value: 'Sponsored'
}, {
  caption: 'Wallet',
  value: 'Wallet'
}],
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    SORTBY_OPTIONS = [{
  caption: 'Latest',
  value: 'latest'
}, {
  caption: 'Popular',
  value: 'popular'
}],
    DF_SORTBY = SORTBY_OPTIONS[0],
    _getValue = function _getValue(item) {
  return item.value;
},
    _fSelect = function _fSelect(comp, propName) {
  return function (option) {
    comp[propName] = option ? option.value : void 0;
  };
};

var CryptoCompareNewsDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(CryptoCompareNewsDialog, _Component);

  function CryptoCompareNewsDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

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
        loadId: 'CCN',
        feed: _this.feed,
        category: _this.category,
        sortOrder: _this.sortBy
      });

      _this._handleClose();
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this.feed = _getValue(DF_FEED);
    _this.category = _getValue(DF_CATEGORY);
    _this.sortBy = _getValue(DF_SORTBY);
    _this._selectFeed = _fSelect((0, _assertThisInitialized2["default"])(_this), 'feed');
    _this._selectCategory = _fSelect((0, _assertThisInitialized2["default"])(_this), 'category');
    _this._selectSortBy = _fSelect((0, _assertThisInitialized2["default"])(_this), 'sortBy');

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = CryptoCompareNewsDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return _react["default"].createElement(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "CryptoCompare News",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose
    }, _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "Feed",
      initItem: DF_FEED,
      options: FEED_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectFeed
    })), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "Category",
      initItem: DF_CATEGORY,
      options: CATEGORY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectCategory
    })), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORTBY,
      options: SORTBY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectSortBy
    })), _react["default"].createElement(_Comp["default"].Link.PoweredBy, {
      rootStyle: S.POWERED_BY
    }, _react["default"].createElement(_Comp["default"].Link.CryptoCompare, null)));
  };

  return CryptoCompareNewsDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(CryptoCompareNewsDialog);

exports["default"] = _default;
//# sourceMappingURL=CryptoCompareNewsDialog.js.map