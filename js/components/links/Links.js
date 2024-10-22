"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.WebzLink = exports.TheNewsApiLink = exports.StackOverflowLink = exports.RedditLink = exports.NewsApiLink = exports.MessariLink = exports.FmpApiLink = exports.DevToLink = exports.CryptoCompareLink = exports.CoinStatsLink = exports.AlphaVantageLink = void 0;
var _ProviderNames = require("../../conf/ProviderNames");
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_LINK = "link";
const _fSafeLink = (href, caption) => _ref => {
  let {
    title,
    tabIndex = "-1",
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)(_SafeLink.default, {
    className: CL_LINK,
    tabIndex: tabIndex,
    ...restProps,
    href: href,
    children: title || caption
  });
};
const CryptoCompareLink = exports.CryptoCompareLink = _fSafeLink("https://cryptocompare.com", _ProviderNames.CRYPTO_COMPARE);
const CoinStatsLink = exports.CoinStatsLink = _fSafeLink("https://coinstats.app", _ProviderNames.COIN_STATS);
const MessariLink = exports.MessariLink = _fSafeLink("https://messari.io", _ProviderNames.MESSARI);
const NewsApiLink = exports.NewsApiLink = _fSafeLink("https://newsapi.org", _ProviderNames.NEWS_API_LONG);
const TheNewsApiLink = exports.TheNewsApiLink = _fSafeLink("https://thenewsapi.com", _ProviderNames.THE_NEWS_API);
const WebzLink = exports.WebzLink = _fSafeLink("https://webz.io", _ProviderNames.WEBZ_IO);
const RedditLink = exports.RedditLink = _fSafeLink("https://www.reddit.com", _ProviderNames.REDDIT);
const DevToLink = exports.DevToLink = _fSafeLink("https://dev.to", _ProviderNames.DEV_TO);
const StackOverflowLink = exports.StackOverflowLink = _fSafeLink("https://stackoverflow.com", _ProviderNames.STACK_OVERFLOW);
const FmpApiLink = exports.FmpApiLink = _fSafeLink("https://financialmodelingprep.com", _ProviderNames.FMP);
const AlphaVantageLink = exports.AlphaVantageLink = _fSafeLink("https://www.alphavantage.co", _ProviderNames.ALPHA_VANTAGE);
//# sourceMappingURL=Links.js.map