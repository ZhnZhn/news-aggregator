"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption4 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

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
    DF_SORTBY = SORTBY_OPTIONS[0];

var _getRefValue = function _getRefValue(ref) {
  return ref.current;
};

var CryptoCompareNewsDialog = function CryptoCompareNewsDialog(_ref) {
  var isShow = _ref.isShow,
      type = _ref.type,
      source = _ref.source,
      itemConf = _ref.itemConf,
      onLoad = _ref.onLoad,
      onShow = _ref.onShow,
      onClose = _ref.onClose;

  var _useRefClose = (0, _useRefClose2["default"])(onClose),
      _refDialog = _useRefClose[0],
      _hClose = _useRefClose[1],
      _useRefSelectOption = (0, _useRefSelectOption4["default"])(DF_FEED.value),
      _refFeed = _useRefSelectOption[0],
      _selectFeed = _useRefSelectOption[1],
      _useRefSelectOption2 = (0, _useRefSelectOption4["default"])(DF_CATEGORY.value),
      _refCategory = _useRefSelectOption2[0],
      _selectCategory = _useRefSelectOption2[1],
      _useRefSelectOption3 = (0, _useRefSelectOption4["default"])(DF_SORTBY.value),
      _refSortBy = _useRefSelectOption3[0],
      _selectSortBy = _useRefSelectOption3[1],
      _hLoad = (0, _react.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'CCN',
      feed: _getRefValue(_refFeed),
      category: _getRefValue(_refCategory),
      sortOrder: _getRefValue(_refSortBy)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _commandButtons = _useDecorDialog[1],
      _hKeyDown = _useDecorDialog[2];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    rootStyle: TS.R_DIALOG,
    browserCaptionStyle: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: "CryptoCompare News",
    isShow: isShow,
    commandButtons: _commandButtons,
    onKeyDown: _hKeyDown,
    onShowChart: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Feed",
        initItem: DF_FEED,
        options: FEED_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectFeed
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "SortBy",
        initItem: DF_SORTBY,
        options: SORTBY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectSortBy
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: S.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.CryptoCompare, {})
    })]
  });
};

var _default = CryptoCompareNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareNewsDialog.js.map