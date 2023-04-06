"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _ProviderNames = require("./ProviderNames");
var NEWS_QUERY = {
  WEBZ: {
    "type": "W_WEBZ_QUERY",
    "dialogType": "WebzQuery",
    "paneCaption": _ProviderNames.WEBZ_IO + ": News, Blogs",
    "paneId": "webz"
  },
  WEBZ_COUNTRY: {
    "type": "W_WEBZ_COUNTRY",
    "dialogType": "WebzCountry",
    "paneCaption": _ProviderNames.WEBZ_IO + ": By Country",
    "paneId": "webz_country"
  },
  REDDIT: {
    "type": "REDDIT",
    "dialogType": "RedditTop",
    "paneCaption": _ProviderNames.REDDIT + ": Top By",
    "paneId": "rd_topby"
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": _ProviderNames.STACK_OVERFLOW + ": Tagged",
    "paneId": "stack_tagged",
    "paneType": "STACK_ITEM"
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": _ProviderNames.STACK_OVERFLOW + ": Search",
    "paneId": "stack_search",
    "paneType": "STACK_ITEM"
  },
  CRYPTO_COMPARE: {
    "type": "CRYPTO_COMPARE",
    "dialogType": "CryptoCompareNews",
    "paneCaption": _ProviderNames.CRYPTO_COMPARE,
    "paneId": "cryptocompare_news"
  },
  COIN_STATS: {
    "type": "COIN_STATS",
    "dialogType": "CoinStatsNews",
    "paneCaption": _ProviderNames.COIN_STATS + " News",
    "paneId": "coinstats_news"
  },
  MESSARI: {
    "type": "MESSARI",
    "dialogType": "MessariNews",
    "paneCaption": _ProviderNames.MESSARI,
    "paneId": "messari_news"
  },
  IEX: {
    "type": "IEX_NEWS",
    "dialogType": "IexNews",
    "paneCaption": _ProviderNames.IEX_CLOUD,
    "paneId": "iex_news"
  },
  FMP: {
    "type": "FMP",
    "dialogType": "FmpNews",
    "paneCaption": _ProviderNames.FMP_LONG,
    "paneId": "fmp_news"
  },
  AV: {
    "type": "AV",
    "dialogType": "AvSentiments",
    "paneCaption": _ProviderNames.ALPHA_VANTAGE,
    "paneId": "av_sentiments"
  },
  NEWS_SEARCH: {
    "type": "NEWS_SEARCH",
    "dialogType": "NewsApiSearch",
    "paneCaption": _ProviderNames.NEWS_API + ": Search",
    "paneId": "newsapi_search",
    "dialogProps": {
      "source": "newsapi_search"
    }
  },
  NEWS_TOP: {
    "type": "NEWS_TOP",
    "dialogType": "NewsApiTop",
    "paneCaption": _ProviderNames.NEWS_API + ": Top By",
    "paneId": "newsapi_top",
    "dialogProps": {
      "source": "newsapi_top"
    }
  },
  THE_NEWS_SEARCH: {
    "type": "THE_NEWS_SEARCH",
    "dialogType": "TheNewsApiSearch",
    "paneCaption": _ProviderNames.THE_NEWS_API + ": Search",
    "paneId": "thenewsapi_search"
  },
  THE_NEWS_TOP: {
    "type": "THE_NEWS_TOP",
    "dialogType": "TheNewsApiTop",
    "paneCaption": _ProviderNames.THE_NEWS_API + ": Top By",
    "paneId": "thenewsapi_top"
  }
};
var _default = NEWS_QUERY;
exports["default"] = _default;
//# sourceMappingURL=NewsQuery.js.map