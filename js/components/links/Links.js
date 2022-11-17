"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.WebzLink = exports.TheNewsApiLink = exports.StackOverflowLink = exports.NewsApiLink = exports.MessariLink = exports.IexApiLink = exports.FmpApiLink = exports.CryptoCompareLink = exports.CoinStatsLink = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _ProviderNames = require("../../conf/ProviderNames");
var _SafeLink = _interopRequireDefault(require("../zhn-atoms/SafeLink"));
var _jsxRuntime = require("preact/jsx-runtime");
var _excluded = ["title"];
var CL_LINK = "link";
var _fSafeLink = function _fSafeLink(href, caption) {
  return function (_ref) {
    var title = _ref.title,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
    return (0, _jsxRuntime.jsx)(_SafeLink["default"], (0, _extends2["default"])({
      className: CL_LINK
    }, restProps, {
      href: href,
      tabIndex: "-1",
      children: title || caption
    }));
  };
};
var CryptoCompareLink = _fSafeLink("https://cryptocompare.com", _ProviderNames.CRYPTO_COMPARE);
exports.CryptoCompareLink = CryptoCompareLink;
var CoinStatsLink = _fSafeLink("https://coinstats.app", _ProviderNames.COIN_STATS);
exports.CoinStatsLink = CoinStatsLink;
var MessariLink = _fSafeLink("https://messari.io", _ProviderNames.MESSARI);
exports.MessariLink = MessariLink;
var NewsApiLink = _fSafeLink("https://newsapi.org", _ProviderNames.NEWS_API_LONG);
exports.NewsApiLink = NewsApiLink;
var TheNewsApiLink = _fSafeLink("https://thenewsapi.com", _ProviderNames.THE_NEWS_API);
exports.TheNewsApiLink = TheNewsApiLink;
var WebzLink = _fSafeLink("https://webz.io", _ProviderNames.WEBZ_IO);
exports.WebzLink = WebzLink;
var StackOverflowLink = _fSafeLink("https://stackoverflow.com", _ProviderNames.STACK_OVERFLOW);
exports.StackOverflowLink = StackOverflowLink;
var IexApiLink = _fSafeLink("https://iexcloud.io", _ProviderNames.IEX_CLOUD);
exports.IexApiLink = IexApiLink;
var FmpApiLink = _fSafeLink("https://financialmodelingprep.com", _ProviderNames.FMP);
exports.FmpApiLink = FmpApiLink;
//# sourceMappingURL=Links.js.map