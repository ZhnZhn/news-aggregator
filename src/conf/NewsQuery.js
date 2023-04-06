import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP_LONG,
  ALPHA_VANTAGE,
  NEWS_API,
  THE_NEWS_API,
  WEBZ_IO,
  STACK_OVERFLOW
} from './ProviderNames';

const NEWS_QUERY = {
  WEBZ: {
    "type": "W_WEBZ_QUERY",
    "dialogType": "WebzQuery",
    "paneCaption": `${WEBZ_IO}: News, Blogs`,
    "paneId": "webz"
  },
  WEBZ_COUNTRY: {
    "type": "W_WEBZ_COUNTRY",
    "dialogType": "WebzCountry",
    "paneCaption": `${WEBZ_IO}: By Country`,
    "paneId": "webz_country"
  },
  STACK_TAGGED: {
    "type": "SO_TAGGED",
    "dialogType": "StackTagged",
    "paneCaption": `${STACK_OVERFLOW}: Tagged`,
    "paneId": "stack_tagged",
    "paneType": "STACK_ITEM"
  },
  STACK_SEARCH: {
    "type": "SO_SEARCH",
    "dialogType": "StackSearch",
    "paneCaption": `${STACK_OVERFLOW}: Search`,
    "paneId": "stack_search",
    "paneType": "STACK_ITEM"
  },

  CRYPTO_COMPARE: {
    "type": "CRYPTO_COMPARE",
    "dialogType": "CryptoCompareNews",
    "paneCaption": CRYPTO_COMPARE,
    "paneId": "cryptocompare_news"
  },
  COIN_STATS: {
    "type": "COIN_STATS",
    "dialogType": "CoinStatsNews",
    "paneCaption": `${COIN_STATS} News`,
    "paneId": "coinstats_news"
  },
  MESSARI: {
    "type": "MESSARI",
    "dialogType": "MessariNews",
    "paneCaption": MESSARI,
    "paneId": "messari_news"
  },
  IEX: {
    "type": "IEX_NEWS",
    "dialogType": "IexNews",
    "paneCaption": IEX_CLOUD,
    "paneId": "iex_news"
  },
  FMP: {
    "type": "FMP",
    "dialogType": "FmpNews",
    "paneCaption": FMP_LONG,
    "paneId": "fmp_news"
  },
  AV: {
    "type": "AV",
    "dialogType": "AvSentiments",
    "paneCaption": ALPHA_VANTAGE,
    "paneId": "av_sentiments"
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
  THE_NEWS_SEARCH: {
    "type": "THE_NEWS_SEARCH",
    "dialogType": "TheNewsApiSearch",
    "paneCaption": `${THE_NEWS_API}: Search`,
    "paneId": "thenewsapi_search",
  },
  THE_NEWS_TOP: {
    "type": "THE_NEWS_TOP",
    "dialogType": "TheNewsApiTop",
    "paneCaption": `${THE_NEWS_API}: Top By`,
    "paneId": "thenewsapi_top"
  }
}

export default NEWS_QUERY
