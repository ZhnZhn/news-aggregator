"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _PoweredBy = _interopRequireDefault(require("../links/PoweredBy"));
var _Links = require("../links/Links");
var _DialogFn = require("./DialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var FEED_OPTIONS = [['All', 'ALL_NEWS_FEEDS'], ['Decrypt', 'decrypt'], ['CoinDesk', 'coindesk'], ['CoinTelegraph', 'cointelegraph'], ['CryptoCompare', 'cryptocompare']],
  DF_FEED = FEED_OPTIONS[0],
  CATEGORY_OPTIONS = [['All', 'ALL_NEWS_CATEGORIES'], ['Altcoin'], ['Asia'], ['Blockchain'], ['Business'], ['Commodity'], ['Exchange'], ['Fiat'], ['ICO'], ['Market'], ['Mining'], ['Regulation'], ['Trading'], ['Technology'], ['Sponsored'], ['Wallet']],
  DF_CATEGORY = CATEGORY_OPTIONS[0],
  SORTBY_OPTIONS = [['Latest', 'latest'], ['Popular', 'popular']],
  DF_SORTBY = SORTBY_OPTIONS[0],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)({
    feed: (0, _OptionFn.getItemValue)(DF_FEED),
    category: (0, _OptionFn.getItemValue)(DF_CATEGORY),
    sortOrder: (0, _OptionFn.getItemValue)(DF_SORTBY)
  });
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
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad((0, _extends2["default"])({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'CCN'
      }, (0, _uiApi.getRefValue)(_refInputs)));
      _hClose();
    }, []),
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1],
    paneCaption = (0, _DialogFn.getPaneCaption)(itemConf);
  return (0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: paneCaption,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: "category",
        caption: "Category",
        initItem: DF_CATEGORY,
        options: CATEGORY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: "feed",
        caption: "Feed",
        initItem: DF_FEED,
        options: FEED_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_InputSelect["default"], {
        id: "sortOrder",
        caption: "SortBy",
        initItem: DF_SORTBY,
        options: SORTBY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: _selectInput
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