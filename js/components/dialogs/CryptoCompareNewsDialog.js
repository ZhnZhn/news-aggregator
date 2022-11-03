"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefSelectOption4 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));

var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));

var _Links = require("../links/Links");

var _jsxRuntime = require("preact/jsx-runtime");

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
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: 'CCN',
      feed: (0, _uiApi.getRefValue)(_refFeed),
      category: (0, _uiApi.getRefValue)(_refCategory),
      sortOrder: (0, _uiApi.getRefValue)(_refSortBy)
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1];

  return (0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "CryptoCompare News",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectCategory
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "Feed",
        initItem: DF_FEED,
        options: FEED_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectFeed
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "SortBy",
        initItem: DF_SORTBY,
        options: SORTBY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectSortBy
      }), (0, _jsxRuntime.jsx)(_PoweredBy["default"], {
        style: TS.POWERED_BY,
        children: (0, _jsxRuntime.jsx)(_Links.CryptoCompareLink, {})
      })]
    })
  });
};

var _default = CryptoCompareNewsDialog;
exports["default"] = _default;
//# sourceMappingURL=CryptoCompareNewsDialog.js.map