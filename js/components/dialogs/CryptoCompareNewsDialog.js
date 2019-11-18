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

var FEED_OPTIONS = [{ caption: 'All', value: 'ALL_NEWS_FEEDS' }, { caption: 'Decrypt', value: 'decrypt' }, { caption: 'CoinDesk', value: 'coindesk' }, { caption: 'CoinTelegraph', value: 'cointelegraph' }, { caption: 'CryptoCompare', value: 'cryptocompare' }],
    DF_FEED = FEED_OPTIONS[0],
    CATEGORY_OPTIONS = [{ caption: 'All', value: 'ALL_NEWS_CATEGORIES' }, { caption: 'Altcoin', value: 'Altcoin' }, { caption: 'Asia', value: 'Asia' }, { caption: 'Blockchain', value: 'Blockchain' }, { caption: 'Business', value: 'Business' }, { caption: 'Commodity', value: 'Commodity' }, { caption: 'Exchange', value: 'Exchange' }, { caption: 'Fiat', value: 'Fiat' }, { caption: 'ICO', value: 'ICO' }, { caption: 'Market', value: 'Market' }, { caption: 'Mining', value: 'Mining' }, { caption: 'Regulation', value: 'Regulation' }, { caption: 'Trading', value: 'Trading' }, { caption: 'Technology', value: 'Technology' }, { caption: 'Sponsored', value: 'Sponsored' }, { caption: 'Wallet', value: 'Wallet' }],
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    SORTBY_OPTIONS = [{ caption: 'Latest', value: 'latest' }, { caption: 'Popular', value: 'popular' }],
    DF_SORTBY = SORTBY_OPTIONS[0],
    _getValue = function _getValue(item) {
  return item.value;
},
    _fSelect = function _fSelect(comp, propName) {
  return function (option) {
    comp[propName] = option ? option.value : void 0;
  };
};

var CryptoCompareNewsDialog = (_dec = _Decors2.default.withDecors, _dec(_class = function (_Component) {
  (0, _inherits3.default)(CryptoCompareNewsDialog, _Component);

  function CryptoCompareNewsDialog(props) {
    (0, _classCallCheck3.default)(this, CryptoCompareNewsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CryptoCompareNewsDialog.__proto__ || Object.getPrototypeOf(CryptoCompareNewsDialog)).call(this, props));

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad;


      onLoad({
        type: type, source: source, itemConf: itemConf,
        loadId: 'CCN',
        feed: _this.feed,
        category: _this.category,
        sortOrder: _this.sortBy
      });
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this.feed = _getValue(DF_FEED);
    _this.category = _getValue(DF_CATEGORY);
    _this.sortBy = _getValue(DF_SORTBY);
    _this._selectFeed = _fSelect(_this, 'feed');
    _this._selectCategory = _fSelect(_this, 'category');
    _this._selectSortBy = _fSelect(_this, 'sortBy');
    _this._initWithDecors(_this);
    return _this;
  }

  (0, _createClass3.default)(CryptoCompareNewsDialog, [{
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
          ref: this._refDialogComp,
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'CryptoCompare News',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.InputSelect, {
            caption: 'Feed',
            initItem: DF_FEED,
            options: FEED_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectFeed
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.InputSelect, {
            caption: 'Category',
            initItem: DF_CATEGORY,
            options: CATEGORY_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectCategory
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.InputSelect, {
            caption: 'SortBy',
            initItem: DF_SORTBY,
            options: SORTBY_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectSortBy
          })
        ),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.CryptoCompare, null)
        )
      );
    }
  }]);
  return CryptoCompareNewsDialog;
}(_react.Component)) || _class);
exports.default = (0, _withTheme2.default)(CryptoCompareNewsDialog);
//# sourceMappingURL=CryptoCompareNewsDialog.js.map