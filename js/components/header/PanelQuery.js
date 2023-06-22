"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _has = require("../has");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useFocusRefElementIf = _interopRequireDefault(require("../hooks/useFocusRefElementIf"));
var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser.Style"));
var _ProviderNames = require("../../conf/ProviderNames");
var _ModalPopup = _interopRequireDefault(require("../zhn-moleculs/ModalPopup"));
var _MenuItem = _interopRequireDefault(require("../zhn-atoms/MenuItem"));
var _OpenClose = _interopRequireDefault(require("../zhn-atoms/OpenClose"));
var _jsxRuntime = require("preact/jsx-runtime");
var HAS_NOT_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS;
var CL_ITEM = 'row__topic';
var S_HORIZONTAL_LINE = {
  margin: '0 16px',
  borderBottom: '1px solid black'
};
var PanelQuery = function PanelQuery(_ref) {
  var refFocusItem = _ref.refFocusItem,
    className = _ref.className,
    paneStyle = _ref.paneStyle,
    isShow = _ref.isShow,
    onCryptoCompare = _ref.onCryptoCompare,
    onCoinStats = _ref.onCoinStats,
    onMessari = _ref.onMessari,
    onIex = _ref.onIex,
    onFmp = _ref.onFmp,
    onAv = _ref.onAv,
    onNewsApi = _ref.onNewsApi,
    onNewsTop = _ref.onNewsTop,
    onTheNewsSearch = _ref.onTheNewsSearch,
    onTheNewsTop = _ref.onTheNewsTop,
    onDevTo = _ref.onDevTo,
    onStackTagged = _ref.onStackTagged,
    onStackSearch = _ref.onStackSearch,
    onWebz = _ref.onWebz,
    onWebzCountry = _ref.onWebzCountry,
    onReddit = _ref.onReddit,
    onClose = _ref.onClose;
  var TS = (0, _useTheme["default"])(_NewsBrowser["default"]),
    _refFirstItem = (0, _useFocusRefElementIf["default"])(isShow && HAS_NOT_TOUCH_EVENTS, refFocusItem);
  return (0, _jsxRuntime.jsxs)(_ModalPopup["default"], {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      refBt: _refFirstItem,
      style: TS.OPEN_CLOSE,
      itemStyle: TS.ITEM,
      caption: "Blockchain",
      children: [(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.CRYPTO_COMPARE,
        onClick: onCryptoCompare
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.COIN_STATS,
        onClick: onCoinStats
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.MESSARI,
        onClick: onMessari
      })]
    }), (0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      caption: "Stock Market",
      style: TS.OPEN_CLOSE,
      itemStyle: TS.ITEM,
      children: [(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.ALPHA_VANTAGE + ": Sentiment",
        onClick: onAv
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.IEX_CLOUD,
        onClick: onIex
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.FMP_LONG,
        onClick: onFmp
      })]
    }), (0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      caption: "General News",
      style: TS.OPEN_CLOSE,
      itemStyle: TS.ITEM,
      children: [(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.NEWS_API_LONG + ": Search",
        onClick: onNewsApi
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.NEWS_API_LONG + ": Top By",
        onClick: onNewsTop
      }), (0, _jsxRuntime.jsx)("div", {
        style: S_HORIZONTAL_LINE
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.THE_NEWS_API + ": Search",
        onClick: onTheNewsSearch
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.THE_NEWS_API + ": Top By",
        onClick: onTheNewsTop
      }), (0, _jsxRuntime.jsx)("div", {
        style: S_HORIZONTAL_LINE
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.WEBZ_IO + ": News, Blogs",
        onClick: onWebz
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.WEBZ_IO + ": By Country, Topic",
        onClick: onWebzCountry
      })]
    }), (0, _jsxRuntime.jsxs)(_OpenClose["default"], {
      caption: "Miscellaneous",
      style: TS.OPEN_CLOSE,
      itemStyle: TS.ITEM,
      children: [(0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.DEV_TO,
        onClick: onDevTo
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.STACK_OVERFLOW + ": Tagged",
        onClick: onStackTagged
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.STACK_OVERFLOW + ": Search",
        onClick: onStackSearch
      }), (0, _jsxRuntime.jsx)("div", {
        style: S_HORIZONTAL_LINE
      }), (0, _jsxRuntime.jsx)(_MenuItem["default"], {
        className: CL_ITEM,
        caption: _ProviderNames.REDDIT + ": Top By",
        onClick: onReddit
      })]
    })]
  });
};
var _default = PanelQuery;
exports["default"] = _default;
//# sourceMappingURL=PanelQuery.js.map