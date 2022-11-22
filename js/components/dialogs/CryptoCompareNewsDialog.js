"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
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
  INPUT_CONFIGS = [['s', 'category', 'Category', CATEGORY_OPTIONS, DF_CATEGORY], ['s', 'feed', 'Feed', FEED_OPTIONS, DF_FEED], ['s', 'sortOrder', 'SortBy', SORTBY_OPTIONS, DF_SORTBY]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
var CryptoCompareNewsDialog = function CryptoCompareNewsDialog(props) {
  var isShow = props.isShow,
    itemConf = props.itemConf,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'CCN', _refInputs),
    _refDialog = _useDialog[0],
    _hLoad = _useDialog[1],
    _hClose = _useDialog[2],
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
      children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
        TS: TS,
        configs: INPUT_CONFIGS,
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