import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP,
  FMP_LONG,
  NEWS_API,
  THE_NEWS_API,
  WEBZ_IO,
  STACK_OVERFLOW
} from './ProviderNames';

const NEWS_QUERY = {
  WEBZ: {
    "type": "W_WEBZ_QUERY",
    "dialogType": "WebzQuery",
    "paneCaption": `${WEBZ_IO} Query`,
    "paneId": "webz",
    "loadId": "W",
    "requestType": "NEWS",
    "dialogProps": {
       "caption": `${WEBZ_IO} Query`,
       "source": "webz"
     }
  },
  WEBZ_COUNTRY: {
    "type": "W_WEBZ_COUNTRY",
    "dialogType": "WebzCountry",
    "paneCaption": `${WEBZ_IO}: By Country`,
    "paneId": "webz_country",
    "loadId": "W",
    "requestType": "NEWS"
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": `${STACK_OVERFLOW}: Tagged`,
    "paneId": "stack_tagged",
    "paneType": "SO_TAGGED",
    "dialogProps": {
       "caption": "Tagged Questions"
     }
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": `${STACK_OVERFLOW}: Search Questions`,
    "paneId": "stack_search",
    "paneType": "SO_SEARCH",
    "dialogProps": {
       "caption": "Search Questions"
     }
  },

  CRYPTO_COMPARE: {
    "type": "CRYPTO_COMPARE",
    "dialogType": "CryptoCompareNews",
    "paneCaption": `${CRYPTO_COMPARE} News`,
    "paneId": "cryptocompare_news",
    "paneType": "CRYPTO_COMPARE_NEWS"
  },
  COIN_STATS: {
    "type": "COIN_STATS",
    "dialogType": "CoinStatsNews",
    "paneCaption": `${COIN_STATS} News`,
    "paneId": "coinstats_news",
    "paneType": "COIN_STATS_NEWS"
  },
  MESSARI: {
    "type": "MESSARI",
    "dialogType": "MessariNews",
    "paneCaption": `${MESSARI} Blockchain News`,
    "paneId": "messari_news",
    "paneType": "MESSARI_NEWS"
  },
  IEX: {
    "type": "IEX_NEWS",
    "dialogType": "IexNews",
    "paneCaption": `${IEX_CLOUD}: Stock Market News`,
    "paneId": "iex_news",
    "paneType": "IEX_NEWS",
    "dialogProps": {
       "caption": `${IEX_CLOUD}: Stock News`
     }
  },
  FMP: {
    "type": "FMP",
    "dialogType": "FmpNews",
    "paneCaption": `${FMP_LONG}: Stock Market News`,
    "paneId": "fmp_news",
    "paneType": "FMP_NEWS",
    "dialogProps": {
       "caption": `${FMP}: Stock News`
     }
  },
  NEWS_SEARCH: {
    "type": "NEWS_SEARCH",
    "dialogType": "NewsApiSearch",
    "paneCaption": `${NEWS_API}: Search`,
    "paneId": "newsapi_search",
    "dialogProps": {
       "source": "newsapi_search"
     }
  },
  NEWS_TOP: {
    "type": "NEWS_TOP",
    "dialogType": "NewsApiTop",
    "paneCaption": `${NEWS_API}: Top By`,
    "paneId": "newsapi_top",
    "dialogProps": {
       "source": "newsapi_top"
     }
  },
  THE_NEWS_TOP: {
    "type": "THE_NEWS_TOP",
    "dialogType": "TheNewsApiTop",
    "paneCaption": `${THE_NEWS_API}: Top By`,
    "paneId": "thenewsapi_top",
    "dialogProps": {
       "source": "thenewsapi_top"
     }
  }
}

export default NEWS_QUERY
