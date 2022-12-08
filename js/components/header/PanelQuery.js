"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _uiApi = require("../uiApi");
var _Comp = _interopRequireDefault(require("../Comp"));
var _jsxRuntime = require("preact/jsx-runtime");
var CL_ITEM = 'row__topic';
var PanelQuery = function PanelQuery(_ref) {
  var className = _ref.className,
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
    onStackTagged = _ref.onStackTagged,
    onStackSearch = _ref.onStackSearch,
    onWebz = _ref.onWebz,
    onWebzCountry = _ref.onWebzCountry,
    onClose = _ref.onClose;
  var _refFirstItem = (0, _uiApi.useRef)(),
    _refPrevEl = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(function () {
    if (isShow && !_refPrevEl.current) {
      _refPrevEl.current = document.activeElement;
      (0, _uiApi.focusRefElement)(_refFirstItem);
    } else if (!isShow) {
      (0, _uiApi.focusRefElement)(_refPrevEl);
      _refPrevEl.current = null;
    }
  }, [isShow]);
  return (0, _jsxRuntime.jsxs)(_Comp["default"].ModalPopup, {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: [(0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      ref: _refFirstItem,
      className: CL_ITEM,
      caption: _ProviderNames.CRYPTO_COMPARE + ": News",
      onClick: onCryptoCompare,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.COIN_STATS + ": News",
      onClick: onCoinStats,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.MESSARI + ": Blockchain News",
      onClick: onMessari,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.IEX_CLOUD + ": Stock Market News",
      onClick: onIex,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.FMP + ": Stock Market News",
      onClick: onFmp,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.ALPHA_VANTAGE + ": Sentiment",
      onClick: onAv,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.NEWS_API_LONG + ": Search",
      onClick: onNewsApi,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.NEWS_API_LONG + ": Top By",
      onClick: onNewsTop,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.THE_NEWS_API + ": Search",
      onClick: onTheNewsSearch,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.THE_NEWS_API + ": Top By",
      onClick: onTheNewsTop,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.STACK_OVERFLOW + ": Tagged Questions",
      onClick: onStackTagged,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.STACK_OVERFLOW + ": Search Questions",
      onClick: onStackSearch,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.WEBZ_IO + ": News, Blogs",
      onClick: onWebz,
      onClose: onClose
    }), (0, _jsxRuntime.jsx)(_Comp["default"].MenuItem, {
      className: CL_ITEM,
      caption: _ProviderNames.WEBZ_IO + ": By Country, Topic",
      onClick: onWebzCountry,
      onClose: onClose
    })]
  });
};
var _default = PanelQuery;
exports["default"] = _default;
//# sourceMappingURL=PanelQuery.js.map