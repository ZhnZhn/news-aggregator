"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var NEWS_QUERY = {
  WEBHOSE_WEB: {
    "type": "W_WEBHOSE_WEB",
    "dialogType": "WebhoseQuery",
    "paneCaption": "Webhose Query",
    "paneId": "webhose",
    "loadId": "W",
    "requestType": "NEWS",
    "dialogProps": {
      "caption": "Webhose Query",
      "source": "webhose"
    }
  },
  WEBHOSE_BRODCAST: {
    "type": "W_WEBHOSE_BRODCAST",
    "dialogType": "WebhoseBrodcast",
    "paneCaption": "Webhose.Io Broadcast",
    "paneId": "webhose_brodcast",
    "loadId": "W",
    "requestType": "BRODCAST",
    "dialogProps": {
      "caption": "Webhose Broadcast",
      "source": "webhose"
    }
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": "StackOverflow: Tagged",
    "paneId": "stack_tagged",
    "paneType": "SO_TAGGED",
    "dialogProps": {
      "caption": "Tagged Questions" //"source": "webhose"

    }
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": "StackOverflow: Search Questions",
    "paneId": "stack_search",
    "paneType": "SO_SEARCH",
    "dialogProps": {
      "caption": "Search Questions" //"source": "webhose"

    }
  },
  CRYPTO_COMPARE: {
    "type": "CRYPTO_COMPARE",
    "dialogType": "CryptoCompareNews",
    "paneCaption": "CryptoCompare News",
    "paneId": "cryptocompare_news",
    "paneType": "CRYPTO_COMPARE_NEWS",
    "dialogProps": {
      "caption": "CryptoCompare News"
    }
  },
  COIN_STATS: {
    "type": "COIN_STATS",
    "dialogType": "CoinStatsNews",
    "paneCaption": "CoinStats News",
    "paneId": "coinstats_news",
    "paneType": "COIN_STATS_NEWS",
    "dialogProps": {
      "caption": "CoinStats News"
    }
  },
  MESSARI: {
    "type": "MESSARI",
    "dialogType": "MessariNews",
    "paneCaption": "Messari Blockchain News",
    "paneId": "messari_news",
    "paneType": "MESSARI_NEWS",
    "dialogProps": {
      "caption": "Messari Blockchain News"
    }
  },
  IEX: {
    "type": "IEX_NEWS",
    "dialogType": "IexNews",
    "paneCaption": "IEX Cloud: Stock Market News",
    "paneId": "iex_news",
    "paneType": "IEX_NEWS",
    "dialogProps": {
      "caption": "IEX Cloud: Stock News" //"source": "iex_news"

    }
  },
  FMP: {
    "type": "FMP",
    "dialogType": "FmpNews",
    "paneCaption": "Financial Modeling Prep: Stock Market News",
    "paneId": "fmp_news",
    "paneType": "FMP_NEWS",
    "dialogProps": {
      "caption": "FMP: Stock News" //"source": "iex_news"

    }
  },
  NEWS_SEARCH: {
    "type": "NEWS_SEARCH",
    "dialogType": "NewsApiSearch",
    "paneCaption": "NewsApi: Search",
    "paneId": "newsapi_search",
    "dialogProps": {
      "source": "newsapi_search"
    }
  },
  NEWS_TOP: {
    "type": "NEWS_TOP",
    "dialogType": "NewsApiTop",
    "paneCaption": "NewsApi: Top By",
    "paneId": "newsapi_top",
    "dialogProps": {
      "source": "newsapi_top"
    }
  }
};
var _default = NEWS_QUERY;
exports["default"] = _default;
//# sourceMappingURL=NewsQuery.js.map